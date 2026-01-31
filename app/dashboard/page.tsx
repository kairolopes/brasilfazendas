"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, ArrowRight, Video } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Portfólio Disponível</h2>
        <p className="text-muted-foreground">Selecione uma fazenda para ver detalhes e iniciar apresentação.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="aspect-video relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000" 
              alt="Cooperformoso"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
              Premium
            </div>
          </div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Cooperformoso
              <Video className="w-4 h-4 text-muted-foreground" />
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Formoso do Araguaia, TO
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">
              Maior projeto de arroz irrigado em área contínua. 12.772 hectares de área total com infraestrutura completa de agrovila e reservatórios.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Arroz Irrigado</span>
              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Soja</span>
              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">12.772 ha</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Link href="/fazenda/cooperformoso" className="w-full">
              <Button className="w-full group-hover:bg-primary/90">
                Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/fazenda/cooperformoso/apresentacao" className="w-full">
              <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 text-primary">
                <Video className="mr-2 w-4 h-4" /> Apresentação Imersiva
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* Placeholder cards */}
        <Card className="opacity-60 border-dashed">
          <CardContent className="flex flex-col items-center justify-center h-[300px]">
            <p className="text-muted-foreground font-medium">Em breve novas propriedades</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
