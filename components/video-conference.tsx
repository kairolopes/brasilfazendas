"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"

export function VideoConference({ roomName = "CooperformosoPresentation" }: { roomName?: string }) {
  const [isActive, setIsActive] = useState(false)
  const jitsiContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isActive && jitsiContainerRef.current) {
      // Load Jitsi script dynamically
      const script = document.createElement("script")
      script.src = "https://meet.jit.si/external_api.js"
      script.async = true
      script.onload = () => {
        // @ts-ignore
        const api = new window.JitsiMeetExternalAPI("meet.jit.si", {
          roomName: `BrasilFazendas-${roomName}-${Date.now()}`,
          parentNode: jitsiContainerRef.current,
          width: '100%',
          height: '600px',
          configOverwrite: {
            startWithAudioMuted: true,
          },
          interfaceConfigOverwrite: {
            SHOW_JITSI_WATERMARK: false,
          }
        })
      }
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [isActive, roomName])

  if (!isActive) {
    return (
      <div className="bg-slate-900 rounded-lg p-12 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Sala de Apresentação Virtual</h3>
        <p className="mb-8 text-slate-300">Inicie uma videoconferência segura para apresentar esta propriedade aos interessados.</p>
        <Button onClick={() => setIsActive(true)} size="lg" className="bg-primary hover:bg-primary/90 text-white">
          Iniciar Videoconferência
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden relative">
      <div ref={jitsiContainerRef} className="w-full" />
      <Button 
        onClick={() => setIsActive(false)} 
        variant="destructive" 
        className="absolute top-4 right-4 z-10"
      >
        Encerrar
      </Button>
    </div>
  )
}
