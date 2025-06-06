import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Shield,
  TrendingUp,
  BarChart2,
  PieChart,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building2 className="h-6 w-6" />
            <span className="relative group cursor-help">
              Dumus
              <div className="absolute top-full left-0 mt-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                Alternative names: Valai, Domai, Nexel, Brikly, Urbio, Bamba
              </div>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/oportunidades" className="text-sm font-medium hover:text-primary">
              Oportunidades de Inversión
            </Link>
            <Link href="/servicio-premier" className="text-sm font-medium hover:text-primary">
              Servicio Premier
            </Link>
            <Button asChild>
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
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Invertí en inmuebles con IA y ganá más
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Detectamos propiedades subvaluadas con IA y las transformamos en inversiones de alta rentabilidad.
                    Servicio integral con ROI promedio del 63%*.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/oportunidades">Oportunidades de Inversión</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/servicio-premier">Solicitar Servicio Premier</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/location-pin-character-standing-among-town-buildings.svg"
                width={500}
                height={500}
                alt="Inversiones inmobiliarias inteligentes con Dumus"
                className="mx-auto w-full h-auto lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* How to invest with Bamba */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="como-invertir">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cómo invertís con Dumus</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un proceso simple y transparente para maximizar tu inversión inmobiliaria
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <h3 className="text-xl font-bold">Oportunidades detectadas por IA</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Analizamos miles de propiedades, combinamos precios históricos, datos públicos y rentabilidades
                    esperadas. Filtrás por zona, precio, metros, y tipo de renta (Airbnb, tradicional, hotelera, etc).
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <h3 className="text-xl font-bold">Verificación y visitas</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Chequeamos escritura, planos, llamamos al vendedor y realizamos hasta 2 visitas presenciales con
                    informe completo. Incluido en tu acceso.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <h3 className="text-xl font-bold">Refacción estratégica y publicación anticipada</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Mejoramos los espacios de mayor impacto: pintura, piso y las cosas mas arruinadas. Publicamos con
                    renders, planos y tour virtual incluso antes de terminar, para captar demanda temprana.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <h3 className="text-xl font-bold">Venta y cobro</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Coordinamos la venta, la documentación y los pagos. Cobras directo en efectivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Choose how to invest */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="oportunidades">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Elegí cómo querés invertir
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dos modalidades adaptadas a tus necesidades y nivel de participación
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ChevronLeft className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold">Explorar Oportunidades</h3>
                  </div>
                  <ul className="grid gap-3">
                    <li className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-primary mt-0.5" />
                      <span>Acceso al radar diario de propiedades con mayor potencial de rentabilidad.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-primary mt-0.5" />
                      <span>Panel con filtros por zona, uso previsto, m² y más.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-primary mt-0.5" />
                      <span>Ideal si querés invertir con datos, pero con control.</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="font-medium">Comisión: 2% sobre el valor de compra</p>
                    <p className="text-sm text-muted-foreground">(equivalente a un broker tradicional)</p>
                  </div>
                </div>
                <Button className="mt-6" asChild>
                  <Link href="/oportunidades">Explorar oportunidades</Link>
                </Button>
              </div>
              <div className="flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm" id="premier">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold">Servicio Premier sin esfuerzo</h3>
                  </div>
                  <ul className="grid gap-3">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                      <span>Nos encargamos de todo: compra, refacción y venta.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>La escritura está a tu nombre desde el inicio.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PieChart className="h-5 w-5 text-primary mt-0.5" />
                      <span>Mismo esquema que los fondos de inversión tradicionales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                      <span>Invertís, nosotros trabajamos.</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="font-medium">Comisión: 2% sobre el precio de compra y 20% sobre la ganancia neta</p>
                  </div>
                </div>
                <Button className="mt-6" variant="default" asChild>
                  <Link href="/servicio-premier">Solicitar Servicio Premier</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust guarantee */}
        <section className="w-full py-12 md:py-16 bg-background border-y">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Garantía de confianza</h2>
              </div>
              <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2 mt-6">
                <div className="flex flex-col items-center p-6 bg-background rounded-xl border shadow-sm">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <p className="font-medium text-center">La propiedad se escritura a tu nombre desde el inicio.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-background rounded-xl border shadow-sm">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <p className="font-medium text-center">Cero riesgo si Dumus desaparece: siempre sos dueño.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="contacto">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
                ¿Querés invertir en ladrillos con inteligencia?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed mb-8">
                Dejanos tus datos y te contactaremos para comenzar tu inversión inmobiliaria inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/registro">Empezar ahora</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <Link href="/oportunidades">Ver oportunidades</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
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
