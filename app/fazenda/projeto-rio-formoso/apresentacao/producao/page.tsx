"use client"

import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { Sprout, Sun, Droplet, Coins } from "lucide-react"

export default function ProducaoPage() {
  const narrationText = "O sistema de produção do Projeto Rio Formoso é um exemplo de eficiência agronômica. A safra principal é o Arroz Irrigado, cultivado de novembro a abril, com produtividades históricas crescentes que hoje ultrapassam 7.500 kg por hectare. Mas o grande diferencial competitivo é a entressafra. De maio a setembro, utilizamos a tecnologia de sub-irrigação para produzir sementes de soja de altíssima qualidade. Neste sistema, a água sobe por capilaridade, não molhando as folhas. O resultado? Uma lavoura livre de doenças fúngicas, reduzindo drasticamente o custo com defensivos e entregando uma semente com vigor e germinação superiores. É a união perfeita entre produtividade e sanidade."

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <VirtualNarrator text={narrationText} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Capítulo IV</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Ciclo Produtivo de Alta Performance
          </h1>
        </motion.div>

        {/* Timeline Visual */}
        <div className="relative py-12 mb-24">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
            {/* Safra Arroz */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-yellow-400"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Safra: Arroz Irrigado</h3>
                  <p className="text-slate-500 font-medium">Novembro a Abril</p>
                </div>
                <Sun className="w-10 h-10 text-yellow-400" />
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                  <p>Produtividade Média: <strong>140+ sc/ha</strong></p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                  <p>Variedades de ciclo longo e alta qualidade de grão.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                  <p>Sistema de inundação controlada.</p>
                </li>
              </ul>
            </motion.div>

            {/* Entressafra Soja */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-600"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Entressafra: Soja Semente</h3>
                  <p className="text-slate-500 font-medium">Maio a Setembro</p>
                </div>
                <Sprout className="w-10 h-10 text-green-600" />
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                  <p>Tecnologia Exclusiva: <strong>Sub-irrigação</strong></p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                  <p>Sem molhamento foliar = Zero doenças fúngicas.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                  <p>Produto Premium: Sementes de alto vigor.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Feature Highlight: Sub-irrigation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold mb-6">
              <Droplet className="w-4 h-4" /> Tecnologia de Ponta
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              O Segredo da Sub-irrigação
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Diferente da irrigação por aspersão (pivô), a sub-irrigação eleva o lençol freático de forma controlada através dos canais de drenagem. A planta absorve água diretamente pelas raízes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-xl">
                <Coins className="w-8 h-8 text-yellow-400 mb-2" />
                <h4 className="font-bold mb-1">Baixo Custo</h4>
                <p className="text-xs text-slate-400">Menor consumo de energia e água.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <Sprout className="w-8 h-8 text-green-400 mb-2" />
                <h4 className="font-bold mb-1">Sanidade</h4>
                <p className="text-xs text-slate-400">Folhas secas, sem fungos.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-8 h-[300px] flex items-center justify-center border border-white/10 relative overflow-hidden">
            {/* Abstract Diagram of Sub-irrigation */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-500/30 blur-xl animate-pulse" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-1 bg-green-500 h-24 rounded-full" />
              <div className="w-32 h-1 bg-amber-700 rounded-full" />
              <div className="flex gap-8">
                <div className="w-1 bg-blue-400 h-16 animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-1 bg-blue-400 h-16 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-1 bg-blue-400 h-16 animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-xs uppercase tracking-widest text-blue-300">Lençol Freático Controlado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
