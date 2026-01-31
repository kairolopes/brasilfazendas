"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Trash2, CalendarClock, UserPlus } from "lucide-react"

export default function AdminPage() {
  const { user, getBrokers, updateBrokerAccess, deleteBroker, register } = useAuth()
  const router = useRouter()
  const [brokers, setBrokers] = useState<any[]>([])
  const [newBrokerEmail, setNewBrokerEmail] = useState("")
  const [newBrokerName, setNewBrokerName] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    if (user && user.role !== 'master') {
      router.push("/dashboard")
    }
    refreshList()
  }, [user, router])

  const refreshList = () => {
    setBrokers(getBrokers())
  }

  const handleUpdateDate = (email: string, dateStr: string) => {
    updateBrokerAccess(email, new Date(dateStr).toISOString())
    refreshList()
  }

  const handleDelete = (email: string) => {
    if (confirm("Tem certeza que deseja remover este corretor?")) {
      deleteBroker(email)
      refreshList()
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await register(newBrokerEmail, newBrokerName)
    if (success) {
      setNewBrokerEmail("")
      setNewBrokerName("")
      setShowAddForm(false)
      refreshList()
    } else {
      alert("Erro ao cadastrar. Email já existe.")
    }
  }

  if (!user || user.role !== 'master') return null

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gestão de Corretores</h2>
          <p className="text-muted-foreground">Gerencie o acesso e horários de apresentação.</p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <UserPlus className="mr-2 h-4 w-4" /> Novo Corretor
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Cadastrar Novo Corretor</CardTitle>
            <CardDescription>O corretor usará a senha padrão '123456' no primeiro acesso.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="flex gap-4 items-end">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" value={newBrokerName} onChange={e => setNewBrokerName(e.target.value)} required placeholder="Nome completo" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={newBrokerEmail} onChange={e => setNewBrokerEmail(e.target.value)} required placeholder="email@exemplo.com" />
              </div>
              <Button type="submit">Cadastrar</Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {brokers.length === 0 ? (
          <p className="text-muted-foreground">Nenhum corretor cadastrado.</p>
        ) : (
          brokers.map((broker) => (
            <Card key={broker.email} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6">
              <div className="space-y-1 mb-4 md:mb-0">
                <h4 className="font-semibold text-lg">{broker.name}</h4>
                <p className="text-sm text-muted-foreground">{broker.email}</p>
                <div className="flex items-center gap-2 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded w-fit">
                   <CalendarClock className="w-3 h-3" />
                   Acesso Agendado: {broker.scheduledAccess ? new Date(broker.scheduledAccess).toLocaleString('pt-BR') : 'Não definido'}
                </div>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="grid gap-1.5 flex-1">
                  <Label htmlFor={`date-${broker.email}`} className="text-xs">Alterar Agendamento</Label>
                  <Input 
                    id={`date-${broker.email}`}
                    type="datetime-local" 
                    className="w-full md:w-[200px]"
                    defaultValue={broker.scheduledAccess ? new Date(broker.scheduledAccess).toISOString().slice(0, 16) : ''}
                    onChange={(e) => handleUpdateDate(broker.email, e.target.value)}
                  />
                </div>
                <Button variant="destructive" size="icon" onClick={() => handleDelete(broker.email)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
