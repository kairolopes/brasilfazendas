"use client"

import { motion } from "framer-motion"
import { MapPin, Truck, Train, Plane } from "lucide-react"

export function LogisticsMap() {
  return (
    <div className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            No Centro do Brasil
          </h2>
          <p className="text-xl text-slate-400">
            Conectividade estratégica para escoamento rápido e eficiente.
          </p>
        </motion.div>

        <div className="relative w-full aspect-[16/9] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700">
          {/* Abstract Map Background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Map Points */}
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Central Hub (Fazenda) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />
                <div className="bg-primary p-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] border-4 border-slate-900">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <span className="mt-4 font-bold text-xl bg-slate-900/80 px-4 py-1 rounded-full backdrop-blur">PROJETO RIO FORMOSO</span>
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <motion.line
                x1="50%" y1="50%" x2="80%" y2="30%"
                stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
              />
              <motion.line
                x1="50%" y1="50%" x2="20%" y2="40%"
                stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
              />
              <motion.line
                x1="50%" y1="50%" x2="50%" y2="80%"
                stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
              />
            </svg>

            {/* Destinations */}

            {/* Ferrovia */}
            <motion.div
              className="absolute top-[30%] right-[20%] flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            >
              <div className="bg-slate-700 p-3 rounded-full border border-slate-500">
                <Train className="w-6 h-6 text-orange-400" />
              </div>
              <div className="mt-2 text-center">
                <p className="font-bold text-orange-400">Ferrovia Norte-Sul</p>
                <p className="text-xs text-slate-400">~250 km (Porto Nacional - TO)</p>
              </div>
            </motion.div>

            {/* Rodovia */}
            <motion.div
              className="absolute top-[40%] left-[20%] flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            >
              <div className="bg-slate-700 p-3 rounded-full border border-slate-500">
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <div className="mt-2 text-center">
                <p className="font-bold text-blue-400">BR-153</p>
                <p className="text-xs text-slate-400">Logística Rodoviária (Aliança)</p>
              </div>
            </motion.div>

            {/* Exportação */}
            <motion.div
              className="absolute bottom-[20%] left-[50%] -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            >
              <div className="bg-slate-700 p-3 rounded-full border border-slate-500">
                <Plane className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="mt-2 text-center">
                <p className="font-bold text-emerald-400">Porto do Itaqui (MA)</p>
                <p className="text-xs text-slate-400">~1.500 km (Exportação China/Europa)</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}
