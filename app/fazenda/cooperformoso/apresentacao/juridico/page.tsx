"use client"

import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { ShieldCheck, FileText, CheckCircle2 } from "lucide-react"

export default function JuridicoPage() {
  const narrationText = "Segurança jurídica é o alicerce de qualquer grande investimento. A Cooperformoso destaca-se por ter 100% de sua área regularizada e livre de passivos. Com 30 anos de consolidação, todas as áreas de Reserva Legal e Preservação Permanente estão delimitadas e preservadas, garantindo conformidade total com o Código Florestal. Possuímos todas as outorgas de água vigentes para captação nos rios da região, um ativo cada vez mais valioso. A propriedade possui matrícula no Registro de Imóveis, CAR, CCIR e ITR em dia. Investir aqui é ter a certeza de um patrimônio blindado e transparente."

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-16">
      <VirtualNarrator text={narrationText} />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Capítulo V</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Segurança Jurídica & Ambiental
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um ativo consolidado, livre de riscos e pronto para transferência. Transparência total em cada hectare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500"
          >
            <ShieldCheck className="w-12 h-12 text-emerald-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Compliance Ambiental</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                <span className="text-slate-600">30 Anos de consolidação da área produtiva.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                <span className="text-slate-600">Reserva Legal e APP totalmente preservadas e cercadas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                <span className="text-slate-600"><strong>Outorgas de Água Vigentes</strong> para todo o projeto de irrigação.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500"
          >
            <FileText className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Regularidade Fundiária</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                <span className="text-slate-600">Matrículas individualizadas e livres de ônus.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                <span className="text-slate-600">CAR (Cadastro Ambiental Rural) validado.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                <span className="text-slate-600">Georreferenciamento certificado pelo INCRA.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="bg-slate-900 text-white rounded-3xl p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Due Diligence Ready</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Toda a documentação técnica, jurídica e fiscal está organizada em Data Room virtual, disponível para auditoria imediata por parte de investidores qualificados.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full border border-white/20">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <span className="text-sm font-semibold">Data Room Disponível</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
