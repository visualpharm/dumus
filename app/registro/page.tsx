import Link from "next/link"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegistroPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building2 className="h-6 w-6" />
            <Link href="/">Dumus</Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/oportunidades" className="text-sm font-medium hover:text-primary">
              Oportunidades de Inversión
            </Link>
            <Link href="/servicio-premier" className="text-sm font-medium hover:text-primary">
              Servicio Premier
            </Link>
            <Button asChild className="bg-primary/90">
              <Link href="/registro">Empezar ahora</Link>
            </Button>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Crear una cuenta</h1>
              <p className="text-muted-foreground">
                Registrate para acceder a oportunidades exclusivas de inversión inmobiliaria.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Ingresá tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+54 9 11 1234-5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button type="submit" className="w-full">
                  Crear cuenta
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                <p className="text-muted-foreground">
                  ¿Ya tenés una cuenta?{" "}
                  <Link href="#login" className="text-primary hover:underline">
                    Iniciar sesión
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Building2 className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left">
              © 2025 Dumus S.A.S. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Acerca
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Términos
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contacto
            </Link>
          </div>
          <p className="text-center text-xs text-muted-foreground md:text-right">
            * El rendimiento pasado no garantiza resultados futuros.
          </p>
        </div>
      </footer>
    </div>
  )
}
