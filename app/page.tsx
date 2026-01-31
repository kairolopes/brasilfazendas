"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegistering, setIsRegistering] = useState(false)
  const [name, setName] = useState("")
  const { login, register, user } = useAuth()
  const router = useRouter()
  const [error, setError] = useState("")

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (isRegistering) {
      const success = await register(email, name)
      if (success) {
        setIsRegistering(false)
        setError("Cadastro realizado! Faça login com a senha padrão 123456.")
      } else {
        setError("Erro ao cadastrar. Email já existe?")
      }
    } else {
      const success = await login(email, password)
      if (success) {
        router.push("/dashboard")
      } else {
        setError("Credenciais inválidas ou horário não permitido.")
      }
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="/images/login-bg.jpg" 
          alt="Fazenda Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/1920x1080?text=Brasil+Fazendas";
            e.currentTarget.onerror = null;
          }}
        />
      </div>

      <Card className="w-[350px] z-20 bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-2xl text-primary font-bold">Brasil Fazendas</CardTitle>
          <CardDescription>
            {isRegistering ? "Cadastro de Corretor" : "Acesso à Plataforma"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              {isRegistering && (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} required />
                </div>
              )}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              {!isRegistering && (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" placeholder="******" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
              )}
              {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>
            <Button className="w-full mt-6" type="submit">
              {isRegistering ? "Cadastrar" : "Entrar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" onClick={() => setIsRegistering(!isRegistering)} className="text-xs text-muted-foreground">
            {isRegistering ? "Já tem conta? Entrar" : "Solicitar acesso (Corretores)"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
