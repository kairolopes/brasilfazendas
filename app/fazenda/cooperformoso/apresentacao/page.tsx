"use client"

import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"

import { useRef, useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function PresentationOverview() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const narrationText = "Olá. Seja bem-vindo à apresentação exclusiva da Cooperformoso. Sou sua assistente virtual e irei guiá-lo por esta jornada. Estamos prestes a conhecer um dos ativos mais valiosos do agronegócio brasileiro. Uma propriedade avaliada em quase um bilhão de reais, que não é apenas terra, mas um complexo agroindustrial consolidado. Prepare-se para ver números impressionantes, infraestrutura de ponta e um legado de sucesso. Utilize o menu lateral para navegar pelos capítulos detalhados deste dossiê."

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/2048386/2048386-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      <VirtualNarrator text={narrationText} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-white/80 text-sm font-medium tracking-wider mb-6">
            OPORTUNIDADE EXCLUSIVA
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight">
            COOPERFORMOSO
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto mb-12">
            O coração do agronegócio no Tocantins. 
            <span className="block mt-2 font-normal text-white">Um legado de 1 bilhão de reais.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link href="/fazenda/cooperformoso/apresentacao/historia">
            <button className="group relative px-8 py-4 bg-primary text-white text-lg font-bold rounded-full overflow-hidden shadow-[0_0_40px_rgba(22,163,74,0.4)] hover:shadow-[0_0_60px_rgba(22,163,74,0.6)] transition-all duration-300">
              <span className="relative z-10 flex items-center gap-3">
                Iniciar Apresentação <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <PlayCircle className="w-12 h-12 stroke-1 group-hover:scale-110 transition-transform" />
                <span className="text-left text-sm leading-tight">
                  Assista ao<br/>Teaser Oficial
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-0 bg-black border-slate-800 overflow-hidden shadow-2xl">
              <div className="relative aspect-video w-full group/video">
                <video 
                  ref={videoRef}
                  controls 
                  playsInline
                  preload="metadata"
                  className="w-full h-full"
                  poster="https://images.pexels.com/photos/2657858/pexels-photo-2657858.jpeg"
                >
                  <source src="https://videos.pexels.com/video-files/2657858/2657858-hd_1920_1080_30fps.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
                
                {/* Custom Play Overlay (disappears when playing if controls logic is handled, but native controls are safer) */}
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/video:bg-black/10 transition-all pointer-events-none"
                  style={{ display: 'none' }} // Hidden by default, relying on native controls + poster
                >
                   <PlayCircle className="w-20 h-20 text-white/80" />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      {/* Footer Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Área Total</p>
            <p className="text-2xl md:text-3xl font-bold text-white">27.000 ha</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Área Irrigada</p>
            <p className="text-2xl md:text-3xl font-bold text-white">12.000 ha</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Infraestrutura</p>
            <p className="text-2xl md:text-3xl font-bold text-white">Completa</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Localização</p>
            <p className="text-2xl md:text-3xl font-bold text-white">Tocantins</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
