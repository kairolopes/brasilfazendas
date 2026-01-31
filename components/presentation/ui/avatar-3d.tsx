"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import { OrbitControls, useVideoTexture, ShaderMaterial } from "@react-three/drei"
import * as THREE from "three"

interface Avatar3DProps {
  speaking: boolean
}

// Custom Shader for Green Screen Removal (Chroma Key)
const GreenScreenShaderMaterial = {
  uniforms: {
    map: { value: null },
    keyColor: { value: new THREE.Color(0.0, 1.0, 0.0) },
    similarity: { value: 0.4 },
    smoothness: { value: 0.1 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D map;
    uniform vec3 keyColor;
    uniform float similarity;
    uniform float smoothness;
    varying vec2 vUv;

    void main() {
      vec4 videoColor = texture2D(map, vUv);
      
      float d = length(videoColor.rgb - keyColor.rgb);
      float alpha = smoothstep(similarity, similarity + smoothness, d);
      
      gl_FragColor = vec4(videoColor.rgb, videoColor.a * alpha);
    }
  `
}

function VideoAvatar({ speaking }: { speaking: boolean }) {
  const [videoUrl, setVideoUrl] = useState("/videos/avatar-talking.mp4")
  
  // Create video element manually to control playback
  const video = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const vid = document.createElement('video');
    vid.src = videoUrl;
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.muted = true; // Muted to not conflict with TTS
    vid.playsInline = true;
    return vid;
  }, [videoUrl]);

  // Use video texture
  const texture = useVideoTexture(videoUrl, {
    unsuspend: 'canvases',
    muted: true,
    loop: true,
    start: false // We control start manually
  })

  // Create shader material
  const shaderArgs = useMemo(() => ({
    uniforms: {
      map: { value: texture },
      keyColor: { value: new THREE.Color(0.05, 0.6, 0.15) }, // Adjusted green for Mixkit video
      similarity: { value: 0.25 },
      smoothness: { value: 0.15 },
    },
    vertexShader: GreenScreenShaderMaterial.vertexShader,
    fragmentShader: GreenScreenShaderMaterial.fragmentShader,
    transparent: true,
    side: THREE.DoubleSide
  }), [texture])

  // Control playback based on speaking prop
  useEffect(() => {
    if (texture && texture.image) {
      const vid = texture.image as HTMLVideoElement;
      if (speaking) {
        vid.play().catch(e => console.log("Video play error:", e));
      } else {
        vid.pause();
      }
    }
  }, [speaking, texture]);

  return (
    <mesh position={[0, -0.5, 0]} scale={[1.6, 0.9, 1]}>
      <planeGeometry args={[4, 4]} />
      <shaderMaterial attach="material" args={[shaderArgs]} />
    </mesh>
  )
}

export function Avatar3D({ speaking }: Avatar3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <VideoAvatar speaking={speaking} />
        
        {/* Subtle background particles or atmosphere could be added here */}
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
