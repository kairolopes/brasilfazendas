"use client"

import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { Card, CardContent } from "@/components/ui/card"

export default function HistoriaPage() {
  const narrationText = "A Cooperativa Agroindustrial Rio Formoso, conhecida como Cooperformoso, foi fundada em 1979 por um grupo visionário de agricultores do sul do Brasil. Instalada na Primeira Etapa do Projeto Rio Formoso, a cooperativa transformou a paisagem do Tocantins, sendo pioneira absoluta no plantio de arroz irrigado na região. Mais do que uma fazenda, a Cooperformoso é a gênese do polo agrícola do estado. Sua história é marcada pela inovação constante: foi aqui que se introduziu a técnica de sub-irrigação para o plantio de soja na entressafra, permitindo duas colheitas anuais de alto valor agregado e consolidando a região como um hub estratégico para sementes de soja de alta qualidade sanitária."

  return (
    <div className="min-h-screen bg-white text-slate-900 p-8 md:p-16 relative overflow-hidden">
      <VirtualNarrator text={narrationText} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Capítulo I</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-slate-900">
            A Gênese do Agronegócio Tocantinense
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="prose prose-lg text-slate-600"
          >
            <p className="lead text-xl text-slate-800 font-medium">
              Fundada em 1979, a <span className="text-primary">COOPERFORMOSO</span> não é apenas uma propriedade rural; é um monumento histórico ao empreendedorismo agrícola.
            </p>
            <p>
              Idealizada por agricultores pioneiros vindos do Sul do Brasil, a cooperativa se instalou na I Etapa do Projeto Rio Formoso com uma missão clara: provar que o cerrado tocantinense poderia alimentar o mundo.
            </p>
            <p>
              Em mais de 40 anos de história, a Cooperformoso consolidou-se como a <strong>responsável direta pelo surgimento do polo agrícola</strong> de Formoso do Araguaia, hoje o segundo maior produtor de arroz do estado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=800" 
              alt="Histórico Agrícola" 
              className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold text-primary font-serif">1979</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Ano de Fundação</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-8">Marcos de Inovação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">1</div>
                <h3 className="font-bold text-lg mb-2">Pioneirismo no Arroz</h3>
                <p className="text-slate-600 text-sm">Primeira grande iniciativa de arroz irrigado em escala industrial na região.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">2</div>
                <h3 className="font-bold text-lg mb-2">Soja na Entressafra</h3>
                <p className="text-slate-600 text-sm">Desenvolvimento da tecnologia de cultivo de soja em várzea tropical (Maio-Setembro).</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">3</div>
                <h3 className="font-bold text-lg mb-2">Sub-irrigação</h3>
                <p className="text-slate-600 text-sm">Domínio da técnica de lençol freático controlado, reduzindo custos e doenças.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
