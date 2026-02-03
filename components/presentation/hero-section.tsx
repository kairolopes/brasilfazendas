"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4]"
      >
        <source src="/fazenda-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm uppercase tracking-widest mb-6 backdrop-blur-sm">
            Exclusive Asset
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tight"
        >
          PROJETO RIO FORMOSO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          O berço do agronegócio tocantinense.
          <br />
          <span className="font-semibold text-white">12.772 Hectares</span> de pura produtividade e legado.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('water-cycle')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Descubra</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </div>
  )
}
