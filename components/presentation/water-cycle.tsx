"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Droplets, Sprout, Coins } from "lucide-react"

export function WaterCycle() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div id="water-cycle" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 mb-6 text-blue-400">
            <Droplets className="w-8 h-8" />
            <span className="text-sm font-bold uppercase tracking-widest">Engenharia Hídrica</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            O Sistema de Sub-irrigação
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Um projeto de engenharia monumental que transforma água em riqueza. 
            Diferente da irrigação convencional, aqui a água alimenta as raízes por capilaridade, 
            eliminando o desperdício aéreo e garantindo uma <span className="text-white font-semibold">sanidade vegetal incomparável</span>.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Sanidade Superior</h4>
                <p className="text-slate-400 text-sm">Sem molhamento foliar, reduzimos drasticamente doenças fúngicas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-yellow-900/30 text-yellow-400">
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Custo Reduzido</h4>
                <p className="text-slate-400 text-sm">Menor consumo de energia e defensivos, maximizando a margem líquida.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Diagram */}
        <div ref={ref} className="relative h-[500px] w-full bg-slate-900/50 rounded-2xl border border-slate-800 p-8 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            {/* River */}
            <motion.path
              d="M 50 400 C 100 300, 50 200, 100 100 S 150 0, 200 0"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="40"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Main Channel */}
            <motion.path
              d="M 80 250 L 300 250"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 1 }}
            />

            {/* Sub Channels */}
            {[1, 2, 3].map((i) => (
              <motion.path
                key={i}
                d={`M ${120 + i * 60} 250 L ${120 + i * 60} 150`}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 2 + i * 0.2 }}
              />
            ))}

            {/* Fields (Turning Gold) */}
            {[1, 2, 3].map((i) => (
              <motion.rect
                key={i}
                x={100 + i * 60}
                y={100}
                width="40"
                height="40"
                fill="#1e293b"
                initial={{ fill: "#1e293b" }}
                animate={isInView ? { fill: "#fbbf24" } : {}}
                transition={{ duration: 1, delay: 3.5 + i * 0.2 }}
              />
            ))}
            
            {/* Field Labels */}
             {[1, 2, 3].map((i) => (
              <motion.text
                key={i}
                x={120 + i * 60}
                y={125}
                textAnchor="middle"
                fill="#000"
                fontSize="10"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 4 }}
              >
                $$$
              </motion.text>
            ))}

          </svg>
          
          <div className="absolute bottom-4 right-4 text-xs text-slate-500 font-mono">
            Diagrama Esquemático: Rio Araguaia → Canais → Lavouras
          </div>
        </div>

      </div>
    </div>
  )
}
