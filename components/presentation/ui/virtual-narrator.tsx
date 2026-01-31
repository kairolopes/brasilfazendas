"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VirtualNarratorProps {
  text: string
}

export function VirtualNarrator({ text }: VirtualNarratorProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    const synth = window.speechSynthesis
    const u = new SpeechSynthesisUtterance(text)
    u.lang = "pt-BR"
    u.rate = 1.0
    u.pitch = 1.0
    
    // Find a good female voice if available
    const voices = synth.getVoices()
    const ptVoice = voices.find(v => v.lang.includes('pt-BR') && v.name.includes('Google')) || voices.find(v => v.lang.includes('pt-BR'))
    if (ptVoice) u.voice = ptVoice

    u.onend = () => setIsPlaying(false)
    setUtterance(u)

    return () => {
      synth.cancel()
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
            className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/20 max-w-xs mb-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase text-slate-500">IA Narradora</span>
            </div>
            <p className="text-sm text-slate-700 italic line-clamp-3">
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
          relative w-20 h-20 rounded-full shadow-2xl flex items-center justify-center overflow-hidden
          transition-all duration-300 border-4 border-white/20 group
          ${isPlaying ? 'ring-4 ring-primary/50' : ''}
        `}
      >
        {/* Realistic Video Avatar Loop */}
        <div className="absolute inset-0 bg-slate-900">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-60 grayscale'}`}
          >
            {/* Using a stock footage of a presenter speaking - simulated */}
            <source src="https://videos.pexels.com/video-files/3205634/3205634-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Status Icon Overlay */}
        <div className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-sm text-xs font-bold z-10 backdrop-blur-sm bg-white/80">
            {isPlaying ? <Pause className="w-3 h-3 text-primary" /> : <Play className="w-3 h-3 text-slate-900" />}
        </div>
      </motion.button>
    </div>
  )
}
