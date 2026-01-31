"use client"

import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  FileText, 
  Droplets, 
  Leaf, 
  TrendingUp, 
  Scale, 
  AlertTriangle,
  CheckCircle2,
  Database
} from "lucide-react"
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
  Cell
} from 'recharts'

// Dados Simulados para BI
const rainfallData = [
  { month: 'Jan', mm: 320 },
  { month: 'Fev', mm: 280 },
  { month: 'Mar', mm: 250 },
  { month: 'Abr', mm: 180 },
  { month: 'Mai', mm: 80 },
  { month: 'Jun', mm: 20 },
  { month: 'Jul', mm: 5 },
  { month: 'Ago', mm: 10 },
  { month: 'Set', mm: 90 },
  { month: 'Out', mm: 160 },
  { month: 'Nov', mm: 220 },
  { month: 'Dez', mm: 290 },
]

const productionHistory = [
  { safra: '19/20', sacas: 125000 },
  { safra: '20/21', sacas: 132000 },
  { safra: '21/22', sacas: 145000 },
  { safra: '22/23', sacas: 158000 },
  { safra: '23/24', sacas: 172000 },
]

const landUseData = [
  { name: 'Arroz Irrigado', value: 12000, color: '#0ea5e9' },
  { name: 'Reserva Legal', value: 9500, color: '#22c55e' },
  { name: 'APP', value: 3500, color: '#16a34a' },
  { name: 'Infraestrutura', value: 2000, color: '#64748b' },
]

const legalDocs = [
  { id: 'M-12.345', type: 'Matrícula', status: 'Regular', date: '12/10/2025', details: 'Área principal de 5.000 ha, livre de ônus.' },
  { id: 'M-12.346', type: 'Matrícula', status: 'Regular', date: '12/10/2025', details: 'Gleba B, averbação de reserva legal concluída.' },
  { id: 'M-12.347', type: 'Matrícula', status: 'Regular', date: '12/10/2025', details: 'Área de expansão, georreferenciamento certificado.' },
  { id: 'CAR-TO-999', type: 'CAR', status: 'Aprovado', date: '15/01/2025', details: 'Cadastro Ambiental Rural validado sem pendências.' },
  { id: 'CCIR-2024', type: 'CCIR', status: 'Quitado', date: '20/12/2024', details: 'Certificado de Cadastro de Imóvel Rural em dia.' },
  { id: 'ITR-2024', type: 'ITR', status: 'Pago', date: '30/09/2024', details: 'Imposto Territorial Rural quitado.' },
  { id: 'OUT-H2O-01', type: 'Outorga', status: 'Vigente', date: '10/06/2028', details: 'Captação Rio Formoso - 15.000 m³/h' },
]

export default function BIPage() {
  const narrationText = "Bem-vindo ao Centro de Inteligência da Cooperformoso. Aqui consolidamos terabytes de dados agronômicos, climáticos e jurídicos em uma interface de decisão executiva. Diferente de apresentações estáticas, este dashboard oferece uma visão granular do ativo. Você pode analisar o histórico pluviométrico que garante nossa segurança hídrica, a evolução consistente de produtividade e, principalmente, a auditoria documental completa. No painel jurídico, listamos as matrículas e certidões que compõem o dossiê de 100 páginas, comprovando a blindagem patrimonial do investimento."

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <VirtualNarrator text={narrationText} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Business Intelligence</span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
              Centro de Inteligência
            </h1>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="px-3 py-1 bg-white border-slate-200 text-slate-600 gap-2">
              <Database className="w-3 h-3" /> Atualizado: Hoje
            </Badge>
            <Badge className="px-3 py-1 bg-primary text-white gap-2">
              <CheckCircle2 className="w-3 h-3" /> Dados Verificados
            </Badge>
          </div>
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-white border border-slate-200 p-1 rounded-xl w-full md:w-auto overflow-x-auto flex justify-start h-auto">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg px-4 py-2">Visão Geral</TabsTrigger>
            <TabsTrigger value="agronomy" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg px-4 py-2">Agronomia & Clima</TabsTrigger>
            <TabsTrigger value="legal" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg px-4 py-2">Jurídico & Compliance</TabsTrigger>
            <TabsTrigger value="financial" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg px-4 py-2">Financeiro</TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Valor de Mercado (Est.)', value: 'R$ 950 Mi', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                { label: 'Área Total', value: '27.000 ha', icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Capacidade Hídrica', value: 'Ilimitada', icon: Droplets, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Status Legal', value: '100% Regular', icon: Scale, color: 'text-purple-600', bg: 'bg-purple-50' },
              ].map((kpi, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${kpi.bg} ${kpi.color}`}>
                      <kpi.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">{kpi.label}</p>
                      <h3 className="text-2xl font-bold text-slate-900">{kpi.value}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Uso do Solo</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={landUseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {landUseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-4 flex-wrap mt-4">
                    {landUseData.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                        <span>{d.name}: {d.value.toLocaleString()} ha</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Evolução Produtiva (Sacas/Ano)</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={productionHistory}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="safra" />
                      <YAxis />
                      <Tooltip cursor={{fill: 'transparent'}} />
                      <Bar dataKey="sacas" fill="#16a34a" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AGRONOMY TAB */}
          <TabsContent value="agronomy">
            <Card className="border-none shadow-lg mb-8">
              <CardHeader>
                <CardTitle>Regime Pluviométrico (Médias Históricas)</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={rainfallData}>
                    <defs>
                      <linearGradient id="colorRain" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis unit=" mm" />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="mm" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRain)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LEGAL TAB */}
          <TabsContent value="legal">
            <Card className="border-none shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Auditoria Documental (Data Room)</CardTitle>
                <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50">100% Compliance</Badge>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                      <tr>
                        <th className="px-6 py-3">Documento ID</th>
                        <th className="px-6 py-3">Tipo</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Última Atualização</th>
                        <th className="px-6 py-3">Detalhes</th>
                        <th className="px-6 py-3 text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {legalDocs.map((doc, i) => (
                        <tr key={i} className="bg-white border-b hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">{doc.id}</td>
                          <td className="px-6 py-4">
                            <Badge variant="secondary" className="font-normal">{doc.type}</Badge>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                              {doc.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-500">{doc.date}</td>
                          <td className="px-6 py-4 text-slate-500 max-w-xs truncate">{doc.details}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary hover:underline font-medium">Visualizar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-400 italic">
                    *Esta é uma amostra. O dossiê completo contém mais de 100 documentos indexados e disponíveis para Due Diligence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FINANCIAL TAB */}
          <TabsContent value="financial">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 text-white border-none">
                <CardHeader>
                  <CardTitle className="text-lg opacity-80">EBITDA (Últimos 12 Meses)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-green-400">R$ 145.2 Mi</div>
                  <div className="mt-2 text-sm text-slate-400 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" /> +12% vs Ano Anterior
                  </div>
                </CardContent>
              </Card>
              {/* Add more financial cards here */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
