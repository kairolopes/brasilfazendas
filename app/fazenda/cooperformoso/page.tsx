"use client"

import { useState } from "react"
import { VideoConference } from "@/components/video-conference"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, MapPin, Calendar, CheckCircle2, AreaChart, Droplets, Sun, Warehouse, Video } from "lucide-react"

export default function CooperformosoPage() {
  const [showVideo, setShowVideo] = useState(false)

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
            Cooperformoso
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
          <div className="flex gap-4">
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}>
              Explorar Detalhes
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 text-white" onClick={() => setShowVideo(true)}>
              <Video className="mr-2 h-5 w-5" /> Apresentação Virtual
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
                  A <strong>Cooperativa Agroindustrial Rio Formoso (COOPERFORMOSO)</strong> é um marco no agronegócio brasileiro. Sediada na I Etapa do Projeto Rio Formoso, foi fundada em 1979 por agricultores pioneiros do Sul do Brasil.
                </p>
                <p className="mb-4">
                  Esta propriedade não é apenas uma fazenda; é a <strong>responsável pelo surgimento do polo agrícola do Tocantins</strong>. Foi pioneira no plantio de arroz irrigado e a primeira a implementar soja irrigada na entressafra (maio/setembro) em todo o país.
                </p>
                <p>
                  Hoje, Formoso do Araguaia responde pela maior área irrigada para produção de cereais da região Norte do Brasil, consolidando a Cooperformoso como um ativo de valor inestimável e alta produtividade.
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
              <TabsList className="w-full justify-start h-auto p-1 bg-muted/50">
                <TabsTrigger value="infra" className="py-3 px-6 text-base">Infraestrutura</TabsTrigger>
                <TabsTrigger value="solo" className="py-3 px-6 text-base">Solo e Clima</TabsTrigger>
                <TabsTrigger value="doc" className="py-3 px-6 text-base">Documentação</TabsTrigger>
              </TabsList>
              <TabsContent value="infra" className="mt-6">
                <div className="bg-card rounded-lg border p-6">
                  <h4 className="text-xl font-semibold mb-4">Agrovila e Instalações</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span>Agrovila completa com condições básicas para bem-estar de cooperados e trabalhadores.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span>Instalações operacionais completas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span>Estrutura de assistência técnica integrada.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span>Sistema de irrigação robusto com amplos reservatórios.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="solo" className="mt-6">
                <div className="bg-card rounded-lg border p-6">
                  <h4 className="text-xl font-semibold mb-4">Características Agronômicas</h4>
                  <p className="mb-4 text-muted-foreground">
                    Solos de várzea com excelentes características físicas para irrigação. Originalmente de média fertilidade, foram corrigidos ao longo de décadas, atingindo hoje níveis elevados de produtividade.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-muted p-4 rounded-md">
                      <span className="block text-xs font-uppercase text-muted-foreground tracking-wider">Altitude</span>
                      <span className="font-semibold text-lg">200m</span>
                    </div>
                    <div className="bg-muted p-4 rounded-md">
                      <span className="block text-xs font-uppercase text-muted-foreground tracking-wider">Localização</span>
                      <span className="font-semibold text-lg">Bacia do Rio Araguaia</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="doc" className="mt-6">
                <div className="bg-card rounded-lg border p-6 flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <Download className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Certidão Inteiro Teor</h4>
                    <p className="text-muted-foreground max-w-sm mx-auto mt-2">
                      Documentação completa disponível para análise jurídica. Atualizada em 10/12/2025.
                    </p>
                  </div>
                  <Button variant="outline" className="mt-4">
                    Solicitar Acesso aos Documentos
                  </Button>
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
                 <VideoConference roomName="Cooperformoso" />
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
