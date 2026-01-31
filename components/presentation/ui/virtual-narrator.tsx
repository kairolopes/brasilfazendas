"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause } from "lucide-react"

interface VirtualNarratorProps {
  text: string
}

export function VirtualNarrator({ text }: VirtualNarratorProps) {
  const [isPlaying, setIsPlaying] = useState(false)
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
        // console.log("Voice selected:", selectedVoice.name)
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
    const synth = window.speechSynthesis
    if (isPlaying) {
      synth.pause()
      setIsPlaying(false)
    } else {
      if (synth.paused) {
        synth.resume()
      } else {
        if (utterance) synth.speak(utterance)
      }
      setIsPlaying(true)
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-end gap-4">
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-black/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-green-500/30 max-w-xs mb-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase text-green-400">IA Narradora</span>
            </div>
            <p className="text-sm text-slate-200 italic line-clamp-3 font-light">
              "{text.substring(0, 100)}..."
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className={`
          relative w-24 h-24 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden
          transition-all duration-300 border-2 border-white/20 group
          ${isPlaying ? 'ring-4 ring-green-500/50 scale-110' : ''}
        `}
      >
        {/* Futuristic Video Avatar */}
        <div className="absolute inset-0 bg-slate-900">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-80 grayscale'}`}
          >
            <source src="https://videos.pexels.com/video-files/8353841/8353841-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Status Icon Overlay */}
        <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 shadow-sm text-xs font-bold z-10">
            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
        </div>
      </motion.button>
    </div>
  )
}
