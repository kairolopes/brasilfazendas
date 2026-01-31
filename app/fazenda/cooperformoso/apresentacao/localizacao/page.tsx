"use client"

import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { MapPin, Navigation, Train, Truck } from "lucide-react"
import dynamic from 'next/dynamic'

// Dynamically import MapComponent to avoid SSR issues with Leaflet
const MapComponent = dynamic(
  () => import('@/components/presentation/ui/map-component'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-slate-800 flex items-center justify-center">
        <div className="text-slate-400 animate-pulse">Carregando mapa via satélite...</div>
      </div>
    )
  }
)

export default function LocalizacaoPage() {
  const narrationText = "A localização da Cooperformoso é um ativo estratégico por si só. Situada no município de Formoso do Araguaia, a propriedade está a apenas 12 quilômetros de acesso asfaltado e conectada às principais artérias logísticas do país. A fazenda integra o corredor da BR-153, a espinha dorsal do transporte rodoviário brasileiro, facilitando o escoamento tanto para os portos do Norte quanto para os mercados do Sul. Além disso, a proximidade de 45 quilômetros com a Ferrovia Norte-Sul coloca a produção em uma posição privilegiada para exportação. Estamos inseridos na região do MATOPIBA, a mais nova e dinâmica fronteira agrícola do Brasil, e próximos ao Vale do Araguaia, garantindo valorização constante da terra."

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950">
      <VirtualNarrator text={narrationText} />

      {/* Background Map - Full Screen */}
      <div className="absolute inset-0 z-0">
        <MapComponent />
      </div>

      {/* Content Overlay - Left Gradient Wrapper */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[45%] bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10">
        <div className="h-full w-full p-8 md:p-12 flex flex-col justify-center overflow-y-auto md:overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Capítulo II</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white drop-shadow-lg">
              O Coração Logístico do Brasil
            </h1>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white">Acesso Privilegiado</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Apenas 12 km de acesso asfaltado ligando a propriedade à malha rodoviária nacional.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-green-500/20 rounded-lg text-green-400 group-hover:bg-green-500/30 transition-colors">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white">Conexão BR-153</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Integração direta com a Belém-Brasília, facilitando o escoamento para todas as regiões.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400 group-hover:bg-orange-500/30 transition-colors">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white">Ferrovia Norte-Sul</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Estrategicamente posicionada a 45 km dos terminais ferroviários, otimizando custos de frete para exportação.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white">MATOPIBA & Vale do Araguaia</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">No epicentro da expansão agrícola nacional, vizinha a grandes players do agronegócio.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
