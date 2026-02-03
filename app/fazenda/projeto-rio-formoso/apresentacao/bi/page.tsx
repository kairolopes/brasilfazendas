"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts"
import {
  TrendingUp,
  DollarSign,
  Sprout,
  Droplets,
  Sun,
  Wind,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Database
} from "lucide-react"

// Dados Simulados
const productionData = [
  { year: '2019', arroz: 45000, soja: 28000, milho: 15000 },
  { year: '2020', arroz: 48000, soja: 32000, milho: 18000 },
  { year: '2021', arroz: 52000, soja: 35000, milho: 22000 },
  { year: '2022', arroz: 55000, soja: 42000, milho: 25000 },
  { year: '2023', arroz: 58000, soja: 48000, milho: 28000 },
  { year: '2024', arroz: 62000, soja: 55000, milho: 32000 },
  { year: '2025', arroz: 65000, soja: 60000, milho: 35000 },
]

const financialData = [
  { month: 'Jan', receita: 12.5, despesa: 4.2 },
  { month: 'Fev', receita: 11.2, despesa: 3.8 },
  { month: 'Mar', receita: 15.8, despesa: 5.1 },
  { month: 'Abr', receita: 18.2, despesa: 6.5 },
  { month: 'Mai', receita: 22.5, despesa: 8.2 },
  { month: 'Jun', receita: 25.8, despesa: 9.1 },
  { month: 'Jul', receita: 28.4, despesa: 8.5 },
  { month: 'Ago', receita: 26.2, despesa: 7.8 },
  { month: 'Set', receita: 21.5, despesa: 6.2 },
  { month: 'Out', receita: 18.8, despesa: 5.5 },
  { month: 'Nov', receita: 15.2, despesa: 4.8 },
  { month: 'Dez', receita: 14.5, despesa: 4.5 },
]

const landUseData = [
  { name: 'Arroz Irrigado', value: 8500 },
  { name: 'Soja (Safrinha)', value: 6200 },
  { name: 'Reserva Legal', value: 4500 },
  { name: 'APP', value: 1200 },
  { name: 'Infraestrutura', value: 800 },
]

const soilData = [
  { subject: 'Matéria Orgânica', A: 120, fullMark: 150 },
  { subject: 'Argila', A: 98, fullMark: 150 },
  { subject: 'Fósforo', A: 86, fullMark: 150 },
  { subject: 'Potássio', A: 99, fullMark: 150 },
  { subject: 'Cálcio', A: 85, fullMark: 150 },
  { subject: 'Magnésio', A: 65, fullMark: 150 },
]

const COLORS = ['#16a34a', '#eab308', '#22c55e', '#15803d', '#3f3f46'];

export default function BusinessIntelligencePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const narrationText = "Bem-vindo ao centro de inteligência do Projeto Rio Formoso. Aqui, utilizamos análise de dados avançada para monitorar cada aspecto da operação em tempo real. Os gráficos demonstram uma curva de crescimento consistente na produtividade de arroz e soja nos últimos 7 anos. Nossa saúde financeira é robusta, com margens de lucro operacional acima da média de mercado. Além disso, monitoramos a qualidade do solo e o uso da terra com precisão satelital. Esta é a prova numérica da eficiência e do potencial de retorno deste investimento."

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 pb-24">
      <VirtualNarrator text={narrationText} />

      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Activity className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Business Intelligence</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Painel de Controle Estratégico
          </h1>
          <p className="text-slate-600 max-w-3xl text-lg">
            Monitoramento em tempo real de KPIs operacionais, financeiros e agronômicos.
            Tomada de decisão baseada em dados (Data-Driven Agriculture).
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex gap-1 items-center">
                  <ArrowUpRight className="w-3 h-3" /> +12.5%
                </Badge>
              </div>
              <p className="text-sm text-slate-500 font-medium">Receita Bruta (YTD)</p>
              <h3 className="text-2xl font-bold text-slate-900">R$ 324.5M</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Sprout className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex gap-1 items-center">
                  <ArrowUpRight className="w-3 h-3" /> +8.2%
                </Badge>
              </div>
              <p className="text-sm text-slate-500 font-medium">Produtividade Média</p>
              <h3 className="text-2xl font-bold text-slate-900">185 sc/ha</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                  <DollarSign className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 flex gap-1 items-center">
                  <ArrowDownRight className="w-3 h-3" /> -2.4%
                </Badge>
              </div>
              <p className="text-sm text-slate-500 font-medium">Custo Operacional</p>
              <h3 className="text-2xl font-bold text-slate-900">R$ 4.250/ha</h3>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600">
                  <Database className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
                  Online
                </Badge>
              </div>
              <p className="text-sm text-slate-500 font-medium">Pontos de Coleta</p>
              <h3 className="text-2xl font-bold text-slate-900">1.240</h3>
            </CardContent>
          </Card>
        </div>

        {/* Main Charts Area */}
        <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-[600px] h-12 bg-white border border-slate-200 p-1 rounded-xl">
            <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white">Visão Geral</TabsTrigger>
            <TabsTrigger value="financial" className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white">Financeiro</TabsTrigger>
            <TabsTrigger value="production" className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white">Produção</TabsTrigger>
            <TabsTrigger value="soil" className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white">Agronômico</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle>Evolução da Produção (Sacas)</CardTitle>
                  <CardDescription>Comparativo histórico Arroz vs Soja vs Milho</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={productionData}>
                      <defs>
                        <linearGradient id="colorArroz" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorSoja" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#eab308" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                      <Tooltip
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      />
                      <Area type="monotone" dataKey="arroz" stackId="1" stroke="#16a34a" fill="url(#colorArroz)" />
                      <Area type="monotone" dataKey="soja" stackId="1" stroke="#eab308" fill="url(#colorSoja)" />
                      <Area type="monotone" dataKey="milho" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle>Uso do Solo (Hectares)</CardTitle>
                  <CardDescription>Distribuição atual das áreas produtivas e preservação</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={landUseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {landUseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle>Fluxo de Caixa 2024/2025 (Milhões R$)</CardTitle>
                <CardDescription>Receitas vs Despesas Operacionais</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={financialData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      cursor={{ fill: '#f3f4f6' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="receita" name="Receita" fill="#16a34a" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="despesa" name="Despesa" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="production" className="space-y-6">
            {/* Additional production details would go here */}
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle>Produtividade Histórica</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center text-slate-400">
                <p>Dados detalhados disponíveis no Data Room</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="soil" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle>Análise de Solo (Radar)</CardTitle>
                  <CardDescription>Qualidade nutricional média dos talhões</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={soilData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 150]} />
                      <Radar name="Amostra A" dataKey="A" stroke="#16a34a" fill="#16a34a" fillOpacity={0.6} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-none bg-slate-900 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Sensores IoT</CardTitle>
                  <CardDescription className="text-slate-400">Monitoramento em Tempo Real</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <Droplets className="text-blue-400" />
                      <div>
                        <p className="font-medium">Umidade do Solo</p>
                        <p className="text-xs text-slate-400">Talhão 04 - Pivô Central</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-400">24%</p>
                      <p className="text-xs text-green-400">Ideal</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <Sun className="text-amber-400" />
                      <div>
                        <p className="font-medium">Radiação Solar</p>
                        <p className="text-xs text-slate-400">Estação Meteorológica 01</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-amber-400">850</p>
                      <p className="text-xs text-slate-400">W/m²</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wind className="text-slate-400" />
                      <div>
                        <p className="font-medium">Velocidade do Vento</p>
                        <p className="text-xs text-slate-400">Direção NE</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">12</p>
                      <p className="text-xs text-slate-400">km/h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}