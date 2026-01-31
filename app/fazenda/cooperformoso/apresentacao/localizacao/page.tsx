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
    <div className="min-h-screen bg-slate-900 text-white p-8 md:p-0 relative flex flex-col md:flex-row">
      <VirtualNarrator text={narrationText} />

      {/* Left Panel - Info */}
      <div className="w-full md:w-1/3 p-8 md:p-12 z-10 bg-slate-900/90 backdrop-blur-sm flex flex-col justify-center border-r border-white/10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Capítulo II</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            O Coração Logístico do Brasil
          </h1>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Acesso Privilegiado</h3>
                <p className="text-slate-400 text-sm">Apenas 12 km de acesso asfaltado ligando a propriedade à malha rodoviária nacional.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Conexão BR-153</h3>
                <p className="text-slate-400 text-sm">Integração direta com a Belém-Brasília, facilitando o escoamento para todas as regiões.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">
                <Train className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Ferrovia Norte-Sul</h3>
                <p className="text-slate-400 text-sm">Estrategicamente posicionada a 45 km dos terminais ferroviários, otimizando custos de frete para exportação.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">MATOPIBA & Vale do Araguaia</h3>
                <p className="text-slate-400 text-sm">No epicentro da expansão agrícola nacional, vizinha a grandes players do agronegócio.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Map */}
      <div className="w-full md:w-2/3 h-[50vh] md:h-screen relative bg-slate-800">
         <MapComponent />
      </div>
    </div>
  )
}
