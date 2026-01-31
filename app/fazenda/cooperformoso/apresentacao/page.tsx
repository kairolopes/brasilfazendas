"use client"

import { HeroSection } from "@/components/presentation/hero-section"
import { WaterCycle } from "@/components/presentation/water-cycle"
import { ProductionStats } from "@/components/presentation/production-stats"
import { LogisticsMap } from "@/components/presentation/logistics-map"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Video } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PresentationPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Floating Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Button 
          variant="outline" 
          className="bg-black/20 backdrop-blur border-white/10 text-white hover:bg-white/10"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Button>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <Button 
          className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]"
          onClick={() => {
            router.push('/fazenda/cooperformoso')
            setTimeout(() => {
               document.getElementById('details')?.scrollIntoView()
            }, 500)
          }}
        >
          <Video className="mr-2 h-4 w-4" /> Agendar Visita
        </Button>
      </div>

      {/* Sections */}
      <HeroSection />
      <ProductionStats />
      <WaterCycle />
      <LogisticsMap />

      {/* Footer CTA */}
      <section className="py-32 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
            Um Legado à Espera
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Oportunidades únicas exigem decisões precisas. <br/>
            Agende uma apresentação técnica detalhada com nossa diretoria.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-12 py-8 bg-white text-slate-950 hover:bg-gray-100 font-semibold"
            onClick={() => router.push('/fazenda/cooperformoso')}
          >
            Entrar em Contato
          </Button>
        </div>
      </section>

    </main>
  )
}
