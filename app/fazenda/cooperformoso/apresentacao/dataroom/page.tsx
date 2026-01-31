"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { VirtualNarrator } from "@/components/presentation/ui/virtual-narrator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Search, 
  Download, 
  Eye, 
  ShieldCheck, 
  Lock, 
  FileCheck,
  Calendar,
  Filter
} from "lucide-react"

// Dados simulados de documentos (100+ items concept)
const documentCategories = [
  { id: 'legal', name: 'Jurídico e Matrículas', count: 45 },
  { id: 'env', name: 'Ambiental (CAR/Licenças)', count: 28 },
  { id: 'tech', name: 'Técnico e Agronômico', count: 32 },
  { id: 'tax', name: 'Fiscal e Tributário', count: 18 },
  { id: 'maps', name: 'Mapas e Georreferenciamento', count: 12 },
]

const documents = [
  // Jurídico
  { id: 'DOC-001', name: 'Certidão de Inteiro Teor - Matrícula 12.345', category: 'legal', date: '10/12/2025', size: '2.4 MB', status: 'Certificado' },
  { id: 'DOC-002', name: 'Certidão de Inteiro Teor - Matrícula 12.346', category: 'legal', date: '10/12/2025', size: '2.1 MB', status: 'Certificado' },
  { id: 'DOC-003', name: 'Certidão de Ônus Reais - Gleba A', category: 'legal', date: '15/12/2025', size: '1.8 MB', status: 'Negativa' },
  { id: 'DOC-004', name: 'CCIR 2024/2025 - Quitad', category: 'legal', date: '02/01/2025', size: '1.2 MB', status: 'Vigente' },
  { id: 'DOC-005', name: 'ITR 2024 - Comprovante de Pagamento', category: 'legal', date: '30/09/2024', size: '0.8 MB', status: 'Pago' },
  { id: 'DOC-006', name: 'Contrato Social Consolidado - Cooperformoso', category: 'legal', date: '10/06/2023', size: '4.5 MB', status: 'Vigente' },
  { id: 'DOC-007', name: 'Ata de Assembleia - Eleição Diretoria', category: 'legal', date: '15/06/2023', size: '1.5 MB', status: 'Registrado' },
  
  // Ambiental
  { id: 'DOC-020', name: 'CAR - Cadastro Ambiental Rural (Recibo)', category: 'env', date: '20/01/2025', size: '3.2 MB', status: 'Ativo' },
  { id: 'DOC-021', name: 'Licença de Operação (LO) - Silos', category: 'env', date: '12/08/2024', size: '5.1 MB', status: 'Vigente' },
  { id: 'DOC-022', name: 'Outorga de Uso de Água - Rio Formoso', category: 'env', date: '10/06/2024', size: '2.9 MB', status: 'Deferido' },
  { id: 'DOC-023', name: 'Plano de Manejo Florestal Sustentável', category: 'env', date: '05/03/2024', size: '12.5 MB', status: 'Aprovado' },
  
  // Técnico
  { id: 'DOC-040', name: 'Análise de Solo - Talhão 01 a 10', category: 'tech', date: '15/11/2025', size: '8.4 MB', status: 'Recente' },
  { id: 'DOC-041', name: 'Análise de Solo - Talhão 11 a 20', category: 'tech', date: '15/11/2025', size: '8.2 MB', status: 'Recente' },
  { id: 'DOC-042', name: 'Relatório de Produtividade Safra 23/24', category: 'tech', date: '30/08/2024', size: '15.1 MB', status: 'Finalizado' },
  { id: 'DOC-043', name: 'Inventário de Máquinas e Equipamentos', category: 'tech', date: '01/12/2025', size: '4.2 MB', status: 'Auditado' },
  { id: 'DOC-044', name: 'Laudo de Avaliação Patrimonial (Valuation)', category: 'tech', date: '01/01/2026', size: '45.0 MB', status: 'Confidencial' },
  
  // More items to simulate volume...
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: `DOC-1${i.toString().padStart(2, '0')}`,
    name: `Relatório Mensal de Operações - ${['Jan', 'Fev', 'Mar', 'Abr', 'Mai'][i % 5]}/2025`,
    category: 'tech',
    date: '2025',
    size: '2.5 MB',
    status: 'Arquivado'
  })),
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: `DOC-2${i.toString().padStart(2, '0')}`,
    name: `Nota Fiscal de Insumos - Lote ${i + 100}`,
    category: 'tax',
    date: '2025',
    size: '0.5 MB',
    status: 'Processado'
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `DOC-3${i.toString().padStart(2, '0')}`,
    name: `Mapa Planialtimétrico - Gleba ${String.fromCharCode(65 + i)}`,
    category: 'maps',
    date: '2024',
    size: '18.0 MB',
    status: 'DWG/PDF'
  }))
]

export default function DataRoomPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const narrationText = "A transparência é fundamental em negociações desta magnitude. Por isso, organizamos este Data Room virtual com acesso a toda a documentação da Cooperformoso. Aqui você encontra desde as matrículas atualizadas e certificadas, até as licenças ambientais, outorgas de água e relatórios técnicos de produtividade. São mais de 100 documentos indexados e auditados, garantindo segurança jurídica total para a transação. Utilize os filtros para localizar documentos específicos ou faça o download do dossiê completo."

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <VirtualNarrator text={narrationText} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Acesso Restrito &bull; Confidencial</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Data Room Virtual
          </h1>
          <p className="text-slate-600 max-w-3xl text-lg">
            Repositório seguro de documentação técnica, jurídica e financeira. 
            Todos os arquivos estão indexados e disponíveis para Due Diligence.
          </p>
        </motion.div>

        {/* Categories Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {documentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id === selectedCategory ? 'all' : cat.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedCategory === cat.id 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:shadow-md'
              }`}
            >
              <div className="text-2xl font-bold mb-1">{cat.count}</div>
              <div className="text-xs uppercase tracking-wider opacity-80">{cat.name}</div>
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="Buscar por nome do documento, ID ou conteúdo..." 
              className="pl-10 bg-white border-slate-200 h-12 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="h-12 px-8 bg-slate-900 hover:bg-slate-800">
            <Filter className="w-4 h-4 mr-2" /> Filtros Avançados
          </Button>
          <Button variant="outline" className="h-12 px-8 border-slate-200 hover:bg-slate-100 text-slate-700">
            <Download className="w-4 h-4 mr-2" /> Baixar Tudo (ZIP)
          </Button>
        </div>

        {/* Documents List */}
        <Card className="border-none shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-100 text-slate-500 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">Documento</th>
                  <th className="px-6 py-4">Categoria</th>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">Tamanho</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredDocs.map((doc, i) => (
                  <motion.tr 
                    key={doc.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="hover:bg-slate-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{doc.name}</div>
                          <div className="text-xs text-slate-400">{doc.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="font-normal capitalize">
                        {documentCategories.find(c => c.id === doc.category)?.name.split(' ')[0]}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> {doc.date}
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{doc.size}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-700 font-medium">{doc.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4 text-slate-500 hover:text-primary" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Download className="w-4 h-4 text-slate-500 hover:text-primary" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50 text-center text-xs text-slate-400">
            Mostrando {filteredDocs.length} de 135 documentos indexados. Acesso registrado por IP.
          </div>
        </Card>
      </div>
    </div>
  )
}
