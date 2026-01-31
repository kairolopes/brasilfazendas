"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user, router])

  if (!user) return null

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b bg-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-primary">Brasil Fazendas</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Olá, {user.name} ({user.role})</span>
          <Button variant="outline" size="sm" onClick={() => { logout(); router.push("/"); }}>
            Sair
          </Button>
        </div>
      </header>
      <main className="p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}
