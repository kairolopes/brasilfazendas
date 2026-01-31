"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Mic } from "lucide-react"

interface VirtualNarratorProps {
  text: string
}

export function VirtualNarrator({ text }: VirtualNarratorProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    const synth = window.speechSynthesis
    const u = new SpeechSynthesisUtterance(text)
    u.lang = "pt-BR"
    u.rate = 1.0
    u.pitch = 1.0
    
    // Find a good female voice if available (Google Português do Brasil usually)
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
          relative w-16 h-16 rounded-full shadow-xl flex items-center justify-center
          ${isPlaying ? 'bg-primary text-white' : 'bg-white text-primary'}
          transition-colors duration-300 border-4 border-white/20
        `}
      >
        {/* Avatar Ring Animation */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border-4 border-primary opacity-20 animate-ping" />
        )}
        
        {/* Avatar Image Placeholder */}
        <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-100">
             <img 
               src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana&backgroundColor=b6e3f4" 
               alt="AI Avatar"
               className="w-full h-full object-cover"
             />
        </div>

        {/* Status Icon Overlay */}
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-sm text-xs font-bold z-10">
            {isPlaying ? <Pause className="w-4 h-4 text-primary" /> : <Play className="w-4 h-4 text-slate-400" />}
        </div>
      </motion.button>
    </div>
  )
}
