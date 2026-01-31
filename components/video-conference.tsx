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
      <div className="bg-slate-900 rounded-lg p-6 text-center text-white">
        <h3 className="text-xl font-bold mb-4">Sala de Apresentação Virtual</h3>
        <p className="mb-6 text-slate-300 text-sm">Escolha a plataforma de sua preferência para apresentar esta propriedade.</p>
        <div className="flex flex-col gap-3">
          <Button onClick={() => setIsActive(true)} size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
            Iniciar na Plataforma (Jitsi)
          </Button>
          <Button 
            onClick={() => window.open('https://meet.google.com/new', '_blank')} 
            size="lg" 
            variant="outline"
            className="w-full bg-white text-slate-900 hover:bg-gray-100"
          >
            Abrir no Google Meet
          </Button>
        </div>
        <p className="mt-4 text-[10px] text-slate-400">
          Nota: O Google Meet será aberto em uma nova aba do navegador.
        </p>
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
