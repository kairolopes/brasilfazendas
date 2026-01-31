"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause, Mic } from "lucide-react"
import { Avatar3D } from "./avatar-3d"

interface VirtualNarratorProps {
  text: string
  autoPlay?: boolean
}

export function VirtualNarrator({ text }: VirtualNarratorProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null)
  const [voiceLoaded, setVoiceLoaded] = useState(false)
  
  useEffect(() => {
    const loadVoice = () => {
      const synth = window.speechSynthesis
      const voices = synth.getVoices()
      
      const u = new SpeechSynthesisUtterance(text)
      u.lang = "pt-BR"
      u.rate = 1.1 // Slightly faster for natural flow
      u.pitch = 1.1 // Slightly higher for female tone
      
      // Priority list for female-sounding voices
      const preferredVoices = [
        'Google Português do Brasil', // Usually female
        'Microsoft Maria', 
        'Luciana', 
        'Joana',
        'Fernanda'
      ]
      
      let selectedVoice = null
      
      // Try to find a preferred voice
      for (const name of preferredVoices) {
        selectedVoice = voices.find(v => v.name.includes(name))
        if (selectedVoice) break
      }
      
      // Fallback to any pt-BR voice
      if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang.includes('pt-BR'))
      }
      
      if (selectedVoice) {
        u.voice = selectedVoice
      }
      
      u.onend = () => setIsPlaying(false)
      setUtterance(u)
      setVoiceLoaded(true)
    }
    
    loadVoice()
    
    // Voices might load asynchronously
    window.speechSynthesis.onvoiceschanged = loadVoice
    
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [text])

  const togglePlay = () => {
    if (!utterance) return

    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
    } else {
      window.speechSynthesis.speak(utterance)
      setIsPlaying(true)
    }
  }

  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden rounded-xl border border-slate-800 shadow-2xl group">
      {/* 3D Avatar Scene */}
      <div className="absolute inset-0 z-0">
        <Avatar3D speaking={isPlaying} />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex justify-between items-end">
        <div className="flex-1 mr-4">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-500'}`} />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {isPlaying ? 'Transmitindo...' : 'Aguardando'}
            </span>
          </div>
          
          <AnimatePresence mode="wait">
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-black/50 backdrop-blur-sm p-3 rounded-lg border border-slate-800"
              >
                <p className="text-sm text-slate-200 line-clamp-2 font-light italic">
                  "{text}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-2">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full bg-black/50 border-slate-700 hover:bg-slate-800 hover:text-green-400 transition-colors"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
