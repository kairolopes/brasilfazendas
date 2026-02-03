"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  History,
  Map as MapIcon,
  Warehouse,
  Sprout,
  Scale,
  TrendingUp,
  Image as ImageIcon,
  ArrowLeft,
  Menu,
  Database,
  FileText,
  Workflow
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Visão Geral", href: "/fazenda/projeto-rio-formoso/apresentacao" },
  { icon: History, label: "História e Legado", href: "/fazenda/projeto-rio-formoso/apresentacao/historia" },
  { icon: MapIcon, label: "Localização", href: "/fazenda/projeto-rio-formoso/apresentacao/localizacao" },
  { icon: Warehouse, label: "Infraestrutura", href: "/fazenda/projeto-rio-formoso/apresentacao/infraestrutura" },
  { icon: Sprout, label: "Produção", href: "/fazenda/projeto-rio-formoso/apresentacao/producao" },
  { icon: Workflow, label: "Processos e Fluxos", href: "/fazenda/projeto-rio-formoso/apresentacao/fluxos" },
  { icon: Scale, label: "Jurídico e Ambiental", href: "/fazenda/projeto-rio-formoso/apresentacao/juridico" },
  { icon: TrendingUp, label: "Inteligência de Mercado", href: "/fazenda/projeto-rio-formoso/apresentacao/mercado" },
  { icon: Database, label: "Centro de Inteligência (BI)", href: "/fazenda/projeto-rio-formoso/apresentacao/bi" },
  { icon: FileText, label: "Data Room (Documentos)", href: "/fazenda/projeto-rio-formoso/apresentacao/dataroom" },
]

export default function PresentationLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-slate-950 text-white border-r border-white/10">
      <div className="p-6">
        <h1 className="text-xl font-serif font-bold tracking-widest text-primary">
          PROJETO RIO FORMOSO
        </h1>
        <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Dossiê Completo</p>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto py-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              <div className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group",
                isActive
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(22,163,74,0.3)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}>
                <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-500 group-hover:text-white")} />
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                )}
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="p-6 border-t border-white/10">
        <Link href="/fazenda/projeto-rio-formoso">
          <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/5">
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar ao Site
          </Button>
        </Link>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-72 fixed inset-y-0 z-40">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-slate-950 text-white border-slate-800">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 border-r-slate-800 bg-slate-950">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-72 min-h-screen transition-all duration-300">
        {children}
      </div>
    </div>
  )
}
