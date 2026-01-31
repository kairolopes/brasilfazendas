"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface Avatar3DProps {
  speaking: boolean
}

function AnimatedCore({ speaking }: { speaking: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate constantly
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
      
      // Pulse effect when speaking
      if (speaking) {
        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 10) * 0.1
        meshRef.current.scale.set(scale, scale, scale)
        // Color shift could be added here
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <MeshDistortMaterial
        color={speaking ? "#4ade80" : "#22c55e"}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.5}
        distort={speaking ? 0.6 : 0.3}
        speed={speaking ? 4 : 2}
      />
    </Sphere>
  )
}

function OuterRing({ speaking }: { speaking: boolean }) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.01
      ringRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
      
      if (speaking) {
        ringRef.current.rotation.z -= 0.05
      }
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[1.8, 0.02, 16, 100]} />
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#ffffff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function Particles({ count = 100 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 0.5
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      p[i * 3 + 2] = r * Math.cos(phi)
    }
    return p
  }, [count])

  const ref = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#4ade80"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export function Avatar3D({ speaking }: Avatar3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#4ade80" intensity={0.5} />
        
        <AnimatedCore speaking={speaking} />
        <OuterRing speaking={speaking} />
        <Particles count={200} />
        
        {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
