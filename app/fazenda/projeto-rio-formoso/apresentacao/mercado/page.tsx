"use client"

import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { TrendingUp, BarChart3, Globe2 } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const riceData = [
  { year: '2019', price: 65 },
  { year: '2020', price: 82 },
  { year: '2021', price: 95 },
  { year: '2022', price: 110 },
  { year: '2023', price: 125 },
  { year: '2024', price: 145 },
]

export default function MercadoPage() {
  const narrationText = "O cenário de mercado para o Projeto Rio Formoso é extremamente promissor. O mundo clama por alimentos, e o arroz é base da dieta global. Nos últimos 5 anos, observamos uma valorização consistente da saca de arroz no mercado interno e externo, impulsionada pela demanda asiática e africana. Além disso, a região do Formoso do Araguaia consolidou-se como o segundo maior polo produtor do Brasil, atraindo indústrias de beneficiamento e trading companies. A inauguração recente da ponte sobre o Rio Araguaia e a pavimentação de novas rodovias reduziram o custo logístico em 15%, aumentando a margem líquida do produtor. Estamos posicionados no lugar certo, na hora certa."

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
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Capítulo VI</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Inteligência de Mercado
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            className="bg-slate-50 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">Demanda Global</h3>
            </div>
            <p className="text-slate-600">
              O Brasil se consolidou como player chave na exportação de arroz, cobrindo déficits de produção na Ásia e EUA.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-slate-50 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">Valorização da Terra</h3>
            </div>
            <p className="text-slate-600">
              Terras irrigadas no Tocantins tiveram valorização superior a 150% na última década, superando a média nacional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-slate-50 p-6 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">Hub Industrial</h3>
            </div>
            <p className="text-slate-600">
              Presença de grandes beneficiadoras na região (Camil, Tio Jorge) garante liquidez imediata para a produção.
            </p>
          </motion.div>
        </div>

        {/* Chart Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
        >
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Evolução do Preço da Saca (Estimativa Regional)
          </h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={riceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis unit=" R$" />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: any) => [`R$ ${value},00`, 'Preço Médio']}
                />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#16a34a"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorPrice)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            *Dados ilustrativos baseados na tendência de mercado regional (Tocantins).
          </p>
        </motion.div>
      </div>
    </div>
  )
}
