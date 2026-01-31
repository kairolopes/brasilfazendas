"use client"

import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { Zap, Droplets, Warehouse, Construction, LandPlot } from "lucide-react"

export default function InfraestruturaPage() {
  const narrationText = "A infraestrutura da Cooperformoso é um colosso de engenharia hidráulica e civil. Estamos falando de um sistema circulatório completo que dá vida a 12 mil hectares. São 115 quilômetros de canais principais e 206 quilômetros de canais secundários, garantindo que a água chegue onde precisa, quando precisa. Para a drenagem, contamos com 85 quilômetros de rede. A proteção contra cheias é assegurada por 165 quilômetros de diques robustos. A logística interna é fluida, com quase 400 quilômetros de estradas. Além disso, a propriedade possui uma rede elétrica trifásica de 60 quilômetros, uma Agrovila completa com armazéns, secadores e pista de pouso, tudo projetado para operação em escala industrial."

  const stats = [
    { icon: Droplets, value: "321 km", label: "Canais de Irrigação (115km Principal + 206km Secundário)", color: "text-blue-500" },
    { icon: LandPlot, value: "165 km", label: "Diques de Contenção", color: "text-amber-600" },
    { icon: Construction, value: "396 km", label: "Estradas Internas", color: "text-slate-600" },
    { icon: Zap, value: "60 km", label: "Rede Elétrica Trifásica", color: "text-yellow-500" },
    { icon: Warehouse, value: "Agrovila", label: "Complexo Industrial e Habitacional", color: "text-indigo-500" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-16">
      <VirtualNarrator text={narrationText} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Capítulo III</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Engenharia de Escala
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma transformação completa da paisagem, criando um ambiente de produção controlado e de alta eficiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className={`p-4 rounded-xl bg-slate-50 w-fit mb-6 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl font-serif font-bold mb-6">A Agrovila</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Mais do que estruturas, a Agrovila é o centro nervoso da operação. Composta por armazéns para insumos e grãos, secadores, oficinas mecânicas completas e alojamentos dignos para a equipe. A estrutura inclui ainda uma pista de pouso, essencial para o manejo aéreo das lavouras e logística de pessoal executivo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Pista de Pouso Operacional</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Secadores e Silos de Armazenagem</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Oficinas e Pátio de Máquinas</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full h-[300px] rounded-xl overflow-hidden bg-slate-800">
               {/* Placeholder for Agrovila Image */}
               <img 
                 src="https://images.unsplash.com/photo-1585665814032-441f7126131d?q=80&w=800" 
                 alt="Silos e Armazéns" 
                 className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
