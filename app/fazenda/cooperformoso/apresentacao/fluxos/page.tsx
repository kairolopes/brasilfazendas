"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Network, 
  Workflow, 
  Sprout, 
  Tractor, 
  Factory, 
  Truck, 
  DollarSign, 
  Recycle, 
  Sun, 
  CloudRain, 
  Droplets, 
  Trees, 
  Leaf,
  ArrowRight,
  Database,
  LineChart,
  Target,
  Users
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"

export default function FluxosPage() {
  const [activeTab, setActiveTab] = useState("produtivo")
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const narrationText = "Nesta seção, detalhamos os processos que tornam a Cooperformoso uma referência em eficiência e sustentabilidade. No Ciclo Produtivo, você pode visualizar cada etapa, desde o planejamento agrícola de precisão até a logística de exportação. Apresentamos também nosso sistema de Integração Lavoura-Pecuária-Floresta, o ILPF, que maximiza o uso da terra com impacto ambiental positivo. Por fim, conheça nossa estrutura de governança corporativa, desenhada para garantir profissionalismo e transparência em todas as tomadas de decisão."

  // Dados do Ciclo Produtivo
  const productionCycle = [
    { 
      id: "planejamento", 
      title: "Planejamento Agrícola", 
      icon: Target, 
      color: "bg-blue-500", 
      details: "Análise de solo, definição de cultivares, compra de insumos e cronograma de plantio baseado em dados climáticos históricos."
    },
    { 
      id: "preparo", 
      title: "Preparo de Solo", 
      icon: Tractor, 
      color: "bg-amber-600", 
      details: "Correção de acidez, adubação de base e sistematização do terreno com uso de agricultura de precisão e piloto automático."
    },
    { 
      id: "plantio", 
      title: "Plantio Monitorado", 
      icon: Sprout, 
      color: "bg-green-600", 
      details: "Semeadura com taxa variável, monitoramento de profundidade e distribuição de sementes em tempo real."
    },
    { 
      id: "manejo", 
      title: "Manejo Cultural", 
      icon: CloudRain, 
      color: "bg-cyan-500", 
      details: "Controle de pragas e doenças via drone, irrigação controlada por sensores de umidade e aplicação de biológicos."
    },
    { 
      id: "colheita", 
      title: "Colheita Digital", 
      icon: Factory, 
      color: "bg-yellow-500", 
      details: "Mapeamento de produtividade, monitoramento de perdas e telemetria das máquinas em tempo real."
    },
    { 
      id: "beneficiamento", 
      title: "Beneficiamento", 
      icon: Recycle, 
      color: "bg-orange-500", 
      details: "Limpeza, secagem e padronização dos grãos nas unidades de armazenamento próprias (Silos)."
    },
    { 
      id: "logistica", 
      title: "Logística e Venda", 
      icon: Truck, 
      color: "bg-slate-700", 
      details: "Expedição para porto/mercado interno e hedge financeiro para maximização de lucros."
    }
  ]

  // Dados do Sistema ILPF (Integração Lavoura-Pecuária-Floresta)
  const ilpfSystem = [
    {
      id: "lavoura",
      title: "Lavoura (Soja/Milho)",
      icon: Sprout,
      color: "bg-yellow-400",
      x: 20, y: 20,
      details: "Produção de grãos gera receita principal e palhada para o solo."
    },
    {
      id: "pecuaria",
      title: "Pecuária (Gado)",
      icon: Factory,
      color: "bg-red-400",
      x: 80, y: 20,
      details: "Gado aproveita pastagem de inverno e recicla nutrientes."
    },
    {
      id: "floresta",
      title: "Floresta (Eucalipto)",
      icon: Trees,
      color: "bg-green-600",
      x: 50, y: 80,
      details: "Fornece sombra (bem-estar animal), madeira e crédito de carbono."
    }
  ]

  // Dados do Fluxo de Gestão
  const managementFlow = [
    { id: "ceo", label: "Conselho Administrativo", type: "root" },
    { id: "dir_ops", label: "Diretoria de Operações", type: "branch" },
    { id: "dir_fin", label: "Diretoria Financeira", type: "branch" },
    { id: "ger_agri", label: "Gerência Agrícola", type: "leaf" },
    { id: "ger_pec", label: "Gerência Pecuária", type: "leaf" },
    { id: "ger_man", label: "Gerência Manutenção", type: "leaf" },
    { id: "contabil", label: "Contabilidade", type: "leaf" },
    { id: "comercial", label: "Comercial", type: "leaf" }
  ]

  return (
    <div className="space-y-8 pb-10 animate-in fade-in duration-700">
      <VirtualNarrator text={narrationText} />
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Mapas Mentais e Fluxos de Processo</h1>
        <p className="text-slate-500 text-lg">
          Visualização técnica dos processos operacionais, ciclos produtivos e estrutura de gestão da Cooperformoso.
        </p>
      </div>

      <Tabs defaultValue="produtivo" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:w-[600px] h-auto md:h-12 bg-white border border-slate-200 p-1 rounded-xl">
          <TabsTrigger value="produtivo" className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white py-2">Ciclo Produtivo</TabsTrigger>
          <TabsTrigger value="sustentabilidade" className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white py-2">Sustentabilidade (ILPF)</TabsTrigger>
          <TabsTrigger value="gestao" className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white py-2">Gestão Corporativa</TabsTrigger>
        </TabsList>

        {/* CICLO PRODUTIVO TAB */}
        <TabsContent value="produtivo" className="space-y-6">
          <Card className="border-none shadow-lg overflow-hidden bg-slate-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-slate-600" />
                Fluxograma do Ciclo Produtivo 360°
              </CardTitle>
              <CardDescription>Clique nos estágios para ver detalhes técnicos operacionais</CardDescription>
            </CardHeader>
            <CardContent className="p-0 md:p-6">
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 overflow-x-auto pb-8 md:pb-0 px-4">
                {/* Linha conectora (Desktop) */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 hidden md:block transform -translate-y-1/2" />
                
                {productionCycle.map((stage, index) => {
                  const Icon = stage.icon
                  const isSelected = selectedNode === stage.id
                  
                  return (
                    <motion.div 
                      key={stage.id}
                      className="flex flex-col items-center relative group min-w-[120px]"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedNode(isSelected ? null : stage.id)}
                    >
                      <div className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10
                        ${isSelected ? 'ring-4 ring-slate-900 ring-offset-2 scale-110' : ''}
                        ${stage.color}
                      `}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="mt-4 text-center">
                        <h3 className="font-bold text-sm text-slate-800">{stage.title}</h3>
                        <div className="flex justify-center mt-1">
                          <Badge variant="outline" className="text-[10px] h-5 bg-white">Etapa {index + 1}</Badge>
                        </div>
                      </div>

                      {/* Seta conectora (Mobile) */}
                      {index < productionCycle.length - 1 && (
                        <div className="md:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                          <ArrowRight className="h-4 w-4 text-slate-400 rotate-90" />
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Detalhes do Nó Selecionado */}
              <AnimatePresence mode="wait">
                {selectedNode && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-8 p-6 bg-white rounded-xl border border-slate-100 shadow-sm mx-4"
                  >
                    {productionCycle.map(stage => {
                      if (stage.id !== selectedNode) return null
                      const Icon = stage.icon
                      return (
                        <div key={stage.id} className="flex flex-col md:flex-row gap-6 items-start">
                          <div className={`p-4 rounded-xl ${stage.color} shrink-0`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{stage.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{stage.details}</p>
                            
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                              <Badge variant="secondary" className="justify-center py-1">Alta Tecnologia</Badge>
                              <Badge variant="secondary" className="justify-center py-1">Monitorado</Badge>
                              <Badge variant="secondary" className="justify-center py-1">Eficiência Máxima</Badge>
                              <Badge variant="secondary" className="justify-center py-1">Sustentável</Badge>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SUSTENTABILIDADE TAB */}
        <TabsContent value="sustentabilidade" className="space-y-6">
          <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-800">
                <Leaf className="h-5 w-5" />
                Sistema ILPF: Integração Lavoura-Pecuária-Floresta
              </CardTitle>
              <CardDescription className="text-emerald-600">
                Modelo circular de sustentabilidade e otimização de uso da terra
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[500px] relative flex items-center justify-center">
              {/* Diagrama Circular Animado */}
              <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
                
                {/* Círculo Central */}
                <motion.div 
                  className="absolute z-10 w-40 h-40 bg-white rounded-full shadow-xl flex flex-col items-center justify-center border-4 border-emerald-500"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Recycle className="h-12 w-12 text-emerald-600 mb-2" />
                  <span className="font-bold text-emerald-800 text-lg">Sinergia</span>
                </motion.div>

                {/* Setas Orbitais */}
                <svg className="absolute w-full h-full pointer-events-none animate-spin-slow" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />
                </svg>

                {/* Elementos ILPF */}
                {ilpfSystem.map((item, index) => {
                  // Posicionamento trigonométrico para triângulo equilátero
                  const angle = (index * 120 - 90) * (Math.PI / 180)
                  const radius = 140
                  const x = 200 + radius * Math.cos(angle) // Ajustado para centralizar no container de 400px (imaginário)
                  const y = 200 + radius * Math.sin(angle)
                  
                  return (
                    <motion.div
                      key={item.id}
                      className="absolute w-64 p-4 bg-white rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-all"
                      style={{ 
                        left: `50%`, 
                        top: `50%`,
                        marginLeft: -128, // metade da largura (w-64 = 16rem = 256px -> 128px)
                        marginTop: -60,  // ajuste vertical aproximado
                        transform: `translate(${radius * Math.cos(angle)}px, ${radius * Math.sin(angle)}px)`
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.05, zIndex: 20 }}
                    >
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-3 text-white shadow-md`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-2">{item.details}</p>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* GESTÃO TAB */}
        <TabsContent value="gestao" className="space-y-6">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-slate-600" />
                Estrutura Organizacional
              </CardTitle>
              <CardDescription>Hierarquia e fluxo de decisão corporativa</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-8">
                {/* Nível 1 - CEO */}
                <div className="flex justify-center">
                  <div className="w-64 p-4 bg-slate-900 text-white rounded-xl shadow-lg text-center relative">
                    <Users className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                    <h3 className="font-bold text-lg">Conselho Administrativo</h3>
                    <p className="text-xs text-slate-400">Tomada de Decisão Estratégica</p>
                    {/* Linha vertical descendo */}
                    <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-slate-300" />
                  </div>
                </div>

                {/* Nível 2 - Diretorias */}
                <div className="flex flex-wrap justify-center gap-8 relative w-full max-w-4xl">
                  {/* Linha horizontal conectora */}
                  <div className="absolute -top-8 left-1/4 right-1/4 h-8 border-t-2 border-l-2 border-r-2 border-slate-300 rounded-t-xl pointer-events-none" />
                  
                  <div className="w-56 p-4 bg-white border-2 border-blue-100 rounded-xl shadow-sm text-center relative group hover:border-blue-500 transition-colors">
                    <Factory className="h-5 w-5 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-bold text-slate-800">Diretoria de Operações</h4>
                    {/* Linha vertical descendo */}
                    <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-slate-200" />
                  </div>

                  <div className="w-56 p-4 bg-white border-2 border-green-100 rounded-xl shadow-sm text-center relative group hover:border-green-500 transition-colors">
                    <LineChart className="h-5 w-5 mx-auto mb-2 text-green-600" />
                    <h4 className="font-bold text-slate-800">Diretoria Financeira</h4>
                    {/* Linha vertical descendo */}
                    <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-slate-200" />
                  </div>
                </div>

                {/* Nível 3 - Gerências (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-4">
                  {/* Filhos da Ops */}
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-sm hover:bg-white hover:shadow-md transition-all">
                      <span className="font-semibold text-blue-700 block">Gerência Agrícola</span>
                      <span className="text-xs text-slate-500">Soja, Milho, Feijão</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-sm hover:bg-white hover:shadow-md transition-all">
                      <span className="font-semibold text-blue-700 block">Gerência Pecuária</span>
                      <span className="text-xs text-slate-500">Gado de Corte, Genética</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-sm hover:bg-white hover:shadow-md transition-all">
                      <span className="font-semibold text-blue-700 block">Manutenção</span>
                      <span className="text-xs text-slate-500">Maquinário e Frota</span>
                    </div>
                  </div>

                  {/* Filhos da Fin */}
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-sm hover:bg-white hover:shadow-md transition-all">
                      <span className="font-semibold text-green-700 block">Contabilidade</span>
                      <span className="text-xs text-slate-500">Fiscal e Tributário</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-sm hover:bg-white hover:shadow-md transition-all">
                      <span className="font-semibold text-green-700 block">Comercial</span>
                      <span className="text-xs text-slate-500">Vendas e Exportação</span>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  )
}
