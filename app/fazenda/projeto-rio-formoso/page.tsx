"use client"

import { useState } from "react"
import { VideoConference } from "@/components/video-conference"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, MapPin, Calendar, CheckCircle2, AreaChart, Droplets, Sun, Warehouse, Video, Sprout, Truck, ShieldCheck, FileText, PlayCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProjetoRioFormosoPage() {
  const [showVideo, setShowVideo] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/fazenda-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white max-w-7xl mx-auto">
          <Badge className="mb-4 bg-primary text-white hover:bg-primary/90 text-lg px-4 py-1">
            Oportunidade Premium
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Projeto Rio Formoso
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:items-center text-lg md:text-xl text-gray-200 mb-8">
            <span className="flex items-center gap-2">
              <MapPin className="text-primary" /> Formoso do Araguaia, TO
            </span>
            <span className="hidden md:inline text-gray-500">•</span>
            <span className="flex items-center gap-2">
              <AreaChart className="text-primary" /> 12.772 Hectares Totais
            </span>
            <span className="hidden md:inline text-gray-500">•</span>
            <span className="flex items-center gap-2">
              <Droplets className="text-primary" /> Maior Projeto de Arroz Irrigado
            </span>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" className="text-lg px-8 bg-white text-slate-900 hover:bg-gray-100" onClick={() => router.push('/fazenda/projeto-rio-formoso/apresentacao')}>
              <PlayCircle className="mr-2 h-5 w-5" /> Modo Apresentação
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-black/20 backdrop-blur border-white/20 hover:bg-white/20 text-white" onClick={() => setShowVideo(true)}>
              <Video className="mr-2 h-5 w-5" /> Videoconferência
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="details" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-12">

            {/* Intro */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-primary">Sobre a Propriedade</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  A <strong>Cooperativa Agroindustrial Rio Formoso (Projeto Rio Formoso)</strong> é um marco no agronegócio brasileiro. Sediada na I Etapa do Projeto Rio Formoso, foi fundada em 1979 por agricultores pioneiros do Sul do Brasil.
                </p>
                <p className="mb-4">
                  Esta propriedade não é apenas uma fazenda; é a <strong>responsável pelo surgimento do polo agrícola do Tocantins</strong>. Foi pioneira no plantio de arroz irrigado e a primeira a implementar soja irrigada na entressafra (maio/setembro) em todo o país.
                </p>
                <p>
                  Hoje, Formoso do Araguaia responde pela maior área irrigada para produção de cereais da região Norte do Brasil, consolidando a Projeto Rio Formoso como um ativo de valor inestimável e alta produtividade.
                </p>
              </div>
            </section>

            {/* Key Specs Grid */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Especificações Técnicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-muted/30 border-none shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <AreaChart className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Área Total</p>
                      <p className="text-2xl font-bold text-foreground">12.772 ha</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-none shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Área de Cultivo (Sistematizada)</p>
                      <p className="text-2xl font-bold text-foreground">4.822,5 ha</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-none shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cyan-100 text-cyan-600">
                      <Warehouse className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Área de Reservatórios</p>
                      <p className="text-2xl font-bold text-foreground">4.170,2 ha</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30 border-none shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Área de Reserva</p>
                      <p className="text-2xl font-bold text-foreground">3.779,3 ha</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Tabs for Details */}
            <Tabs defaultValue="infra" className="w-full">
              <TabsList className="w-full justify-start h-auto p-1 bg-muted/50 overflow-x-auto flex-nowrap">
                <TabsTrigger value="infra" className="py-3 px-6 text-base whitespace-nowrap">Infraestrutura</TabsTrigger>
                <TabsTrigger value="prod" className="py-3 px-6 text-base whitespace-nowrap">Produção</TabsTrigger>
                <TabsTrigger value="log" className="py-3 px-6 text-base whitespace-nowrap">Logística</TabsTrigger>
                <TabsTrigger value="doc" className="py-3 px-6 text-base whitespace-nowrap">Documentação</TabsTrigger>
              </TabsList>

              <TabsContent value="infra" className="mt-6 space-y-6">
                <div className="bg-card rounded-lg border p-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Droplets className="text-blue-500" /> Sistema de Irrigação
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    A propriedade utiliza um avançado sistema de <strong>sub-irrigação</strong>, que oferece vantagens competitivas únicas:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3 bg-muted/30 p-3 rounded-md">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      <span>Baixo custo de manutenção e operação (consumo reduzido de energia).</span>
                    </li>
                    <li className="flex items-start gap-3 bg-muted/30 p-3 rounded-md">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      <span>Sanidade vegetal superior (sem molhamento aéreo, reduzindo doenças).</span>
                    </li>
                    <li className="flex items-start gap-3 bg-muted/30 p-3 rounded-md">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      <span>Eficiência hídrica com reaproveitamento de água.</span>
                    </li>
                    <li className="flex items-start gap-3 bg-muted/30 p-3 rounded-md">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      <span>Infraestrutura consolidada com canais e drenos.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Warehouse className="text-orange-500" /> Agrovila e Instalações
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span>Agrovila completa com condições básicas para bem-estar de cooperados e trabalhadores.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span>Estrutura de assistência técnica integrada.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="prod" className="mt-6 space-y-6">
                <div className="bg-card rounded-lg border p-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Sprout className="text-green-600" /> Potencial Produtivo
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Arroz Irrigado</h5>
                      <p className="text-sm text-muted-foreground">
                        Carro-chefe da propriedade, com alta produtividade e tradição de décadas. Tecnologia de ponta adaptada ao solo de várzea.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Soja (Sementes)</h5>
                      <p className="text-sm text-muted-foreground">
                        Produção na entressafra (maio-setembro). O clima seco na colheita garante sementes de altíssimo vigor e germinação.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Integração Pecuária</h5>
                      <p className="text-sm text-muted-foreground">
                        Uso das áreas de sequeiro e restos culturais para engorda de gado, otimizando o ciclo anual.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Diferencial Estratégico</h4>
                  <p className="text-blue-700 text-sm">
                    A colheita de soja ocorre na entressafra nacional, permitindo comercialização imediata sem custos de armazenagem e preços premium no mercado.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="log" className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg border p-6">
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Truck className="text-slate-600" /> Logística
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <span><strong>12 km</strong> de acesso asfaltado até a sede.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <span>Conexão direta com a <strong>BR-153</strong> (Belém-Brasília).</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <span><strong>45 km</strong> da Ferrovia Norte-Sul (Pátio Multimodal).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-lg border p-6">
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <ShieldCheck className="text-emerald-600" /> Sustentabilidade
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Projeto consolidado há 30 anos, com passivo ambiental resolvido e plena conformidade legal.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Outorgas de água vigentes.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Áreas de Reserva Legal e APP preservadas.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="doc" className="mt-6">
                <div className="bg-card rounded-lg border p-6">
                  <h4 className="text-xl font-semibold mb-6">Documentação Disponível</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="/documents/certidao inteiro teor 10-12-2025.pdf" target="_blank" className="group flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="p-3 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-medium group-hover:text-primary transition-colors">Certidão Inteiro Teor</h5>
                        <p className="text-xs text-muted-foreground">Atualizado em 10/12/2025 • PDF</p>
                      </div>
                      <Download className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-primary" />
                    </a>

                    <a href="/documents/RESUMO_EXECUTIVO.docx" target="_blank" className="group flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-medium group-hover:text-primary transition-colors">Resumo Executivo</h5>
                        <p className="text-xs text-muted-foreground">Detalhes do Projeto • DOCX</p>
                      </div>
                      <Download className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-primary" />
                    </a>

                    <div className="flex items-center gap-4 p-4 border rounded-lg opacity-60 bg-muted/20">
                      <div className="p-3 bg-gray-100 text-gray-500 rounded-lg">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-medium text-muted-foreground">CAR / Georreferenciamento</h5>
                        <p className="text-xs text-muted-foreground">Disponível mediante solicitação</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 border rounded-lg opacity-60 bg-muted/20">
                      <div className="p-3 bg-gray-100 text-gray-500 rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-medium text-muted-foreground">CCIR / ITR</h5>
                        <p className="text-xs text-muted-foreground">Disponível mediante solicitação</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Gallery Grid */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Galeria de Imagens</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[500px]">
                <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1600"
                    alt="Plantação Arroz"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-medium">Cultivo de Arroz Irrigado</p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800"
                    alt="Vista Aérea"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=800"
                    alt="Maquinário"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Sticky Contact/Action */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {showVideo ? (
                <VideoConference roomName="ProjetoRioFormoso" />
              ) : (
                <Card className="border-primary/20 shadow-xl">
                  <CardHeader className="bg-primary/5 border-b border-primary/10">
                    <CardContent className="pt-6 pb-2 text-center">
                      <h3 className="text-lg font-semibold text-primary mb-1">Interessado na Propriedade?</h3>
                      <p className="text-sm text-muted-foreground">Inicie uma apresentação ao vivo agora.</p>
                    </CardContent>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <Button className="w-full h-12 text-lg" onClick={() => setShowVideo(true)}>
                      <Video className="mr-2 w-5 h-5" /> Iniciar Videoconferência
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Ambiente seguro e criptografado para negociações.
                    </p>
                  </CardContent>
                </Card>
              )}

              <div className="bg-muted/50 rounded-lg p-6 border">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Próximas Visitas
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Disponível</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Melhor época</span>
                    <span className="font-medium">Todo o ano (Irrigado)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
