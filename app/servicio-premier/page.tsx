"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicioPremierPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const goToNextStep = () => {
    setCurrentStep(2)
  }

  const goToPreviousStep = () => {
    setCurrentStep(1)
  }

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
            <Link href="/servicio-premier" className="text-sm font-medium text-primary border-b-2 border-primary">
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
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Servicio Premier</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-xl border p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Nuestro Proceso</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Selección estratégica:</strong> Elegimos una propiedad con alto potencial de rentabilidad.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Inspección exhaustiva:</strong> Realizamos hasta 10 visitas incluidas en el servicio.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Acompañamiento en compra:</strong> Ahorramos en comisiones gracias a nuestro know-how.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Gestión de refacción:</strong> Supervisamos todo el proceso de renovación.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Marketing estratégico:</strong> Campaña profesional para maximizar el valor de venta.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Venta optimizada:</strong> Gestionamos todo el proceso hasta el cierre.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl border p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Tu Garantía</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Propiedad a tu nombre:</strong> Sos el dueño en todas las etapas del proceso.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Financiación transparente:</strong> La obra de renovación la financias vos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Transparencia total:</strong> Acceso a todas las facturas en nuestro sistema online.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Inversión segura:</strong> No vinculada al mercado financiero.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Sin preocupaciones:</strong> Nos encargamos de todos los detalles.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Estructura de Comisiones</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg border p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2%</div>
                  <p className="text-sm text-muted-foreground">sobre el precio de compra</p>
                  <p className="text-xs text-muted-foreground">(equivalente a un broker tradicional)</p>
                </div>
                <div className="bg-card rounded-lg border p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15%</div>
                  <p className="text-sm text-muted-foreground">por supervisión de obra</p>
                  <p className="text-xs text-muted-foreground">(estándar para maestro mayor de obra)</p>
                </div>
                <div className="bg-card rounded-lg border p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20%</div>
                  <p className="text-sm text-muted-foreground">sobre la ganancia neta</p>
                  <p className="text-xs text-muted-foreground">(después de todos los gastos)</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
              <Image src="/team-photo.png" alt="Equipo de Dumus" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Nuestro Equipo</h3>
                  <p className="max-w-2xl">
                    Un grupo de profesionales especializados en inversiones inmobiliarias, arquitectura, construcción y
                    marketing inmobiliario.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          {currentStep === 1 && (
            <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-xl">
              {/* Progress indicator */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Paso 1 de 2</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-1/2"></div>
                </div>
              </div>

              <h1 className="text-2xl font-bold mb-6">Solicitar Servicio Premier</h1>

              <form className="space-y-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-mono"
                    defaultValue="+54 11 "
                    placeholder="1234-5678"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="tu@email.com"
                  />
                  <p className="text-xs text-gray-500">* Completá teléfono o email (al menos uno es requerido)</p>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">¿Dónde preferís la llamada?</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      className="flex flex-col gap-2 items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        Z
                      </div>
                      <span>Zoom</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col gap-2 items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        W
                      </div>
                      <span>WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col gap-2 items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        G
                      </div>
                      <span>Google Meet</span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={goToNextStep}
                  className="bg-black text-white hover:bg-neutral-800 w-full py-3 rounded-lg"
                >
                  Siguiente →
                </button>
              </form>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-xl">
              {/* Progress indicator */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Paso 2 de 2</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-full"></div>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-6">Paso 2 / 2: Sobre tu inversión</h2>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    ¿Qué objetivo querés alcanzar con nuestra ayuda hoy? (Opcional)
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    rows={3}
                    placeholder="Contanos sobre tus objetivos..."
                  />
                  <p className="text-xs text-gray-500">
                    Hacemos house flipping, pero cada caso es diferente y queremos servir tus necesidades personales
                    mejor.
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">¿Cuánto querés invertir?</label>
                  <div className="grid grid-cols-1 gap-3">
                    <button
                      type="button"
                      className="flex flex-col gap-2 items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <span className="text-2xl">💵</span>
                      <span>Menos de $30 000</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col gap-2 items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <span className="text-2xl">💵💵</span>
                      <span>Entre $30 000 y $500 000</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col gap-2 items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <span className="text-2xl">💵💵💵</span>
                      <span>Más de $500 000</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">¿Tenés experiencia con flipping?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="flex flex-col gap-2 items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <span className="text-2xl">✅</span>
                      <span>Sí</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col gap-2 items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <span className="text-2xl">❌</span>
                      <span>No</span>
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    className="bg-gray-200 text-gray-800 hover:bg-gray-300 w-1/3 py-3 rounded-lg"
                  >
                    ← Atrás
                  </button>
                  <button type="submit" className="bg-black text-white hover:bg-neutral-800 w-2/3 py-3 rounded-lg">
                    Programar una consulta
                  </button>
                </div>
              </form>
            </div>
          )}
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
