"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Sun, CloudRain, Droplets, Wind, ThermometerSun } from "lucide-react"
import { motion } from "framer-motion"

export function MarketWeatherWidget() {
  // Dados simulados baseados na pesquisa real (Janeiro/2026 - Data do ambiente)
  // Preços aproximados de mercado para a época
  const marketData = [
    { 
      item: "Soja (Saca 60kg)", 
      price: "R$ 128,50", 
      trend: "up", 
      change: "+1.2%",
      location: "Referência: Porto de Paranaguá"
    },
    { 
      item: "Arroz (Saca 50kg)", 
      price: "R$ 115,00", 
      trend: "up", 
      change: "+0.8%",
      location: "Referência: RS (Média)"
    },
    { 
      item: "Boi Gordo (@)", 
      price: "R$ 245,00", 
      trend: "down", 
      change: "-0.5%",
      location: "Referência: SP (B3)"
    },
    { 
      item: "Dólar (PTAX)", 
      price: "R$ 5,42", 
      trend: "up", 
      change: "+0.3%",
      location: "Cotação Comercial"
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      {/* Weather Card */}
      <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-none shadow-lg overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <Sun className="w-24 h-24" />
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-blue-100 text-sm font-medium">Formoso do Araguaia - TO</p>
              <CardTitle className="text-3xl mt-1">31°C</CardTitle>
            </div>
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none">
              Ao Vivo
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Sun className="w-5 h-5 text-yellow-300" />
            <span className="font-medium">Ensolarado</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm text-blue-100">
            <div className="flex flex-col gap-1">
              <span className="opacity-70 flex items-center gap-1"><Droplets className="w-3 h-3" /> Umidade</span>
              <span className="font-semibold">62%</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-70 flex items-center gap-1"><Wind className="w-3 h-3" /> Vento</span>
              <span className="font-semibold">12 km/h</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-70 flex items-center gap-1"><CloudRain className="w-3 h-3" /> Chuva</span>
              <span className="font-semibold">0mm</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Data */}
      <Card className="lg:col-span-2 border-slate-200 shadow-md">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> 
              Indicadores de Mercado
            </CardTitle>
            <p className="text-xs text-muted-foreground">Atualizado: 31/01/2026</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {marketData.map((data, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-lg bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <p className="text-xs text-slate-500 font-medium truncate" title={data.item}>{data.item}</p>
                <div className="flex items-end justify-between mt-1">
                  <span className="text-lg font-bold text-slate-800">{data.price}</span>
                  <div className={`flex items-center text-xs font-bold ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {data.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                    {data.change}
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 truncate">{data.location}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
