"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Área de Cultivo (Sistematizada)", value: 4822.5, color: "#10b981" }, // Emerald 500
  { name: "Reservatórios de Água", value: 4170.2, color: "#3b82f6" }, // Blue 500
  { name: "Reserva Legal & APP", value: 3779.3, color: "#059669" }, // Emerald 700
]

export function ProductionStats() {
  return (
    <div className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            A Matemática da Produtividade
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            12.772 Hectares distribuídos estrategicamente para maximizar o retorno e garantir a sustentabilidade perene.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Chart */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={160}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  itemStyle={{ color: '#0f172a', fontWeight: 600 }}
                  formatter={(value: number) => [`${value.toLocaleString('pt-BR')} ha`, 'Área']}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Stats Cards */}
          <div className="space-y-6">
             <motion.div
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100"
             >
               <h3 className="text-emerald-900 font-bold text-lg uppercase tracking-wider mb-2">Poder de Safra</h3>
               <div className="text-5xl font-bold text-emerald-600 mb-2">4.822 ha</div>
               <p className="text-emerald-800">
                 De área totalmente sistematizada para arroz irrigado e soja semente. 
                 <span className="font-semibold"> Alta tecnologia de nivelamento a laser.</span>
               </p>
             </motion.div>

             <motion.div
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="p-8 bg-blue-50 rounded-2xl border border-blue-100"
             >
               <h3 className="text-blue-900 font-bold text-lg uppercase tracking-wider mb-2">Segurança Hídrica</h3>
               <div className="text-5xl font-bold text-blue-600 mb-2">4.170 ha</div>
               <p className="text-blue-800">
                 De lâmina d'água em reservatórios próprios. 
                 <span className="font-semibold"> Independência climática total.</span>
               </p>
             </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
