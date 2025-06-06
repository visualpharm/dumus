"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Building2, List, Map, Lock, Grid, Search, ArrowDown, Filter, ArrowUpDown, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OportunidadesPage() {
  const [activeTab, setActiveTab] = useState("map")
  const [filterOpen, setFilterOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [paywallOpen, setPaywallOpen] = useState(false)

  // Sort properties by ROI (highest to lowest)
  const sortedProperties = [...properties].sort((a, b) => b.roi - a.roi)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const openPaywall = () => {
    setPaywallOpen(true)
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
            <Link href="/oportunidades" className="text-sm font-medium text-primary border-b-2 border-primary">
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
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Oportunidades de Inversión</h1>
            <p className="text-xl text-muted-foreground">
              Explora propiedades con alto potencial de rentabilidad detectadas por nuestra IA.
            </p>
          </div>

          <Dialog open={filterOpen} onOpenChange={setFilterOpen}>
            <DialogContent className="sm:max-w-[900px]">
              <DialogHeader>
                <DialogTitle>Filtros avanzados</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="relative md:col-span-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="text" placeholder="Nombres, descripciónes..." className="pl-8" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Precio</span>
                    <Input type="text" placeholder="20000" className="w-24" />
                    <span>—</span>
                    <Input type="text" placeholder="35000" className="w-24" />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="reestructurar">A reestructurar</SelectItem>
                      <SelectItem value="reformado">Reformado</SelectItem>
                      <SelectItem value="nuevo">Nuevo</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Barrio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="palermo">Palermo</SelectItem>
                      <SelectItem value="recoleta">Recoleta</SelectItem>
                      <SelectItem value="belgrano">Belgrano</SelectItem>
                      <SelectItem value="villaurquiza">Villa Urquiza</SelectItem>
                      <SelectItem value="microcentro">Microcentro</SelectItem>
                      <SelectItem value="matanza">Matanza</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Ambientes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4+">4+</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="md:col-span-3">
                    <Button variant="outline" className="w-full">
                      Más filtros
                    </Button>
                  </div>
                  <Button className="w-full" onClick={() => setFilterOpen(false)}>
                    Aplicar filtros
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={paywallOpen} onOpenChange={setPaywallOpen}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-center text-xl">Registra para ver la propiedad</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center py-6 space-y-4">
                <Lock className="h-16 w-16 text-primary" />
                <p className="text-center">
                  Para acceder a los detalles completos de esta propiedad, necesitas crear una cuenta gratuita.
                </p>
                <div className="flex flex-col w-full gap-3">
                  <Button className="w-full">Crear cuenta gratis</Button>
                  <Button variant="outline" className="w-full">
                    Iniciar sesión
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Tabs defaultValue="map" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="map" className="flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  <span>Mapa</span>
                </TabsTrigger>
                <TabsTrigger value="grid" className="flex items-center gap-2">
                  <Grid className="h-4 w-4" />
                  <span>Cuadrícula</span>
                </TabsTrigger>
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  <span>Lista</span>
                </TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setFilterOpen(true)}>
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Ordenar
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Compartir"}
                </Button>
              </div>
            </div>

            <TabsContent value="map" className="mt-0">
              <div className="rounded-xl border bg-card overflow-hidden shadow-sm">
                <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 to-green-50">
                  {/* Map Background */}
                  <div className="absolute inset-0">
                    <Image
                      src="/buenos-aires-map.png"
                      alt="Mapa de Buenos Aires"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Property Pins */}
                  {sortedProperties
                    .filter((p) => p.type !== "Loft")
                    .map((property, index) => {
                      // Position properties across the map
                      const positions = [
                        { x: 25, y: 35 }, // Palermo
                        { x: 35, y: 45 }, // Villa Crespo
                        { x: 45, y: 25 }, // Recoleta
                        { x: 55, y: 20 }, // Núñez
                        { x: 65, y: 55 }, // Belgrano
                        { x: 15, y: 75 }, // Matanza
                        { x: 50, y: 40 }, // Microcentro
                        { x: 60, y: 30 }, // Villa Urquiza
                      ]

                      const position = positions[index % positions.length]

                      return (
                        <div
                          key={property.id}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                          style={{
                            left: `${position.x}%`,
                            top: `${position.y}%`,
                          }}
                        >
                          {/* Pin */}
                          <div className="relative">
                            <div
                              className={`w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110 ${
                                property.roi >= 50
                                  ? "bg-green-500"
                                  : property.roi >= 35
                                    ? "bg-yellow-500"
                                    : "bg-orange-500"
                              }`}
                            >
                              {property.roi}%
                            </div>

                            {/* Pin pointer */}
                            <div
                              className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent ${
                                property.roi >= 50
                                  ? "border-t-green-500"
                                  : property.roi >= 35
                                    ? "border-t-yellow-500"
                                    : "border-t-orange-500"
                              }`}
                            />

                            {/* Tooltip */}
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-48 opacity-0 group-hover:opacity-100 transition-opacity z-10 border">
                              {/* Add property image */}
                              <div className="relative w-full h-24 mb-3 rounded-md overflow-hidden">
                                <Image
                                  src={property.realImage || "/placeholder.svg"}
                                  alt={property.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <div className="text-sm font-semibold text-gray-900 mb-1">{property.title}</div>
                              <div className="text-xs text-gray-600 mb-2">{property.barrio}</div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                  <span className="text-gray-500">Compra:</span>
                                  <div className="font-medium">${property.price.toLocaleString()}</div>
                                </div>
                                <div>
                                  <span className="text-gray-500">% anual:</span>
                                  <div className="font-medium text-primary">{property.roi}%</div>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {property.bedrooms} amb • {property.area} m²
                              </div>
                              <Button size="sm" className="w-full mt-2" onClick={openPaywall}>
                                Ver detalles
                              </Button>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                  {/* Map Legend */}
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 border">
                    <h3 className="font-semibold text-sm mb-3">Rentabilidad Anual</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        <span className="text-xs">50%+ (Excelente)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                        <span className="text-xs">35%+ (Buena)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                        <span className="text-xs">20%+ (Estándar)</span>
                      </div>
                    </div>
                  </div>

                  {/* Map Title */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 border">
                    <h2 className="font-bold text-lg mb-1">Flores</h2>
                    <p className="text-sm text-gray-600">Zoom para ver más propiedades</p>
                  </div>

                  {/* Zoom Controls */}
                  <div className="absolute bottom-4 right-4 flex flex-col gap-1">
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      +
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                      −
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="grid" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sortedProperties
                  .filter((p) => p.type !== "Loft")
                  .map((property, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={property.realImage || "/placeholder.svg"}
                            alt={property.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute top-2 left-2 flex gap-1">
                          {property.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="bg-black/70 text-white hover:bg-black/70">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary text-white hover:bg-primary">{property.discount}% OFF</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <button onClick={openPaywall} className="font-bold text-lg text-primary hover:underline">
                            {property.title}
                          </button>
                          <Badge variant="outline" className="text-xs">
                            {property.bedrooms} amb {property.type}
                          </Badge>
                        </div>

                        <div className="bg-muted/40 rounded-lg p-3 mb-4">
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                              <p className="text-xs text-muted-foreground">Compra</p>
                              <p className="font-medium">${property.price.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Venta</p>
                              <p className="font-medium">
                                ${(property.price * (1 + property.roi / 100)).toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">% anual</p>
                              <p className="font-medium text-primary">{property.roi}%</p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
                          <div className="p-2 bg-muted rounded-md">
                            <p className="text-xs text-muted-foreground">Estado</p>
                            <p className="font-medium">A reestructurar</p>
                          </div>
                          <div className="p-2 bg-muted rounded-md">
                            <p className="text-xs text-muted-foreground">Área</p>
                            <p className="font-medium">{property.area} m²</p>
                          </div>
                          <div className="p-2 bg-muted rounded-md">
                            <p className="text-xs text-muted-foreground">Barrio</p>
                            <button onClick={openPaywall} className="font-medium text-primary hover:underline">
                              {property.barrio}
                            </button>
                          </div>
                        </div>

                        <Button className="w-full" variant="outline" onClick={openPaywall}>
                          <Lock className="h-4 w-4 mr-2" />
                          Ver anuncio
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-0">
              <div className="rounded-xl border bg-card overflow-hidden">
                <div className="grid grid-cols-12 gap-2 bg-muted px-4 py-3 text-sm font-medium">
                  <div className="col-span-2">Nombre</div>
                  <div className="col-span-2 text-right">Compra</div>
                  <div className="col-span-2 text-right">Venta*</div>
                  <div className="col-span-1 text-right flex items-center justify-end">
                    % anual <ArrowDown className="h-3 w-3 ml-1" />
                  </div>
                  <div className="col-span-1">Estado</div>
                  <div className="col-span-1 text-center">m²</div>
                  <div className="col-span-2">Barrio</div>
                  <div className="col-span-1 text-center">Amb</div>
                </div>

                {sortedProperties
                  .filter((p) => p.type !== "Loft")
                  .map((property, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-12 gap-2 px-4 py-3 items-center ${
                        index % 2 === 0 ? "bg-background" : "bg-muted/30"
                      }`}
                    >
                      <div className="col-span-2">
                        <button onClick={openPaywall} className="text-primary hover:underline font-medium">
                          {property.title}
                        </button>
                      </div>
                      <div className="col-span-2 text-right">${property.price.toLocaleString()}</div>
                      <div className="col-span-2 text-right">
                        ${(property.price * (1 + property.roi / 100)).toLocaleString()}
                      </div>
                      <div className="col-span-1 text-right text-primary font-medium">{property.roi}%</div>
                      <div className="col-span-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${property.progress * 20}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-span-1 text-center">{property.area}</div>
                      <div className="col-span-2">
                        <button onClick={openPaywall} className="text-primary hover:underline">
                          {property.barrio}
                        </button>
                      </div>
                      <div className="col-span-1 text-center">{property.bedrooms}</div>
                    </div>
                  ))}

                <div className="flex flex-col items-center justify-center py-6 bg-muted/30">
                  <p className="mb-4 text-muted-foreground">Ver todos los datos</p>
                  <Button>Registrar gratis</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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

interface Property {
  id: string
  title: string
  address: string
  barrio: string
  price: number
  originalPrice: number
  discount: number
  roi: number
  area: number
  bedrooms: number
  bathrooms: number
  type: string
  image: string
  shabbyImage: string
  realImage?: string
  tags: string[]
  timeLeft: string
  progress: number
}

const properties: Property[] = [
  {
    id: "prop1",
    title: "Departamento en Palermo",
    address: "Thames 1500, Palermo, CABA",
    barrio: "Palermo",
    price: 95000,
    originalPrice: 120000,
    discount: 21,
    roi: 42,
    area: 65,
    bedrooms: 3,
    bathrooms: 1,
    type: "Depto",
    image: "/property-1.png",
    shabbyImage: "/shabby-apartment-1.png",
    realImage: "/apartment-1.png",
    tags: ["Oportunidad"],
    timeLeft: "3 días",
    progress: 2,
  },
  {
    id: "prop2",
    title: "PH en Villa Crespo",
    address: "Malabia 800, Villa Crespo, CABA",
    barrio: "Villa Crespo",
    price: 85000,
    originalPrice: 110000,
    discount: 23,
    roi: 38,
    area: 72,
    bedrooms: 2,
    bathrooms: 1,
    type: "PH",
    image: "/property-2.png",
    shabbyImage: "/shabby-apartment-2.png",
    realImage: "/apartment-2.png",
    tags: ["Exclusivo"],
    timeLeft: "5 días",
    progress: 3,
  },
  {
    id: "prop3",
    title: "Monoambiente en Recoleta",
    address: "Juncal 2200, Recoleta, CABA",
    barrio: "Recoleta",
    price: 75000,
    originalPrice: 90000,
    discount: 17,
    roi: 28,
    area: 40,
    bedrooms: 1,
    bathrooms: 1,
    type: "Depto",
    image: "/property-3.png",
    shabbyImage: "/shabby-apartment-3.png",
    realImage: "/apartment-3.png",
    tags: ["Nuevo"],
    timeLeft: "2 días",
    progress: 1,
  },
  {
    id: "prop4",
    title: "Casa en Núñez",
    address: "Quesada 1800, Núñez, CABA",
    barrio: "Núñez",
    price: 180000,
    originalPrice: 220000,
    discount: 18,
    roi: 52,
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    type: "Casa",
    image: "/property-4.png",
    shabbyImage: "/shabby-apartment-4.png",
    realImage: "/apartment-4.png",
    tags: ["Premium"],
    timeLeft: "7 días",
    progress: 4,
  },
  {
    id: "prop5",
    title: "Loft en San Telmo",
    address: "Defensa 1200, San Telmo, CABA",
    barrio: "San Telmo",
    price: 88000,
    originalPrice: 105000,
    discount: 16,
    roi: 39,
    area: 55,
    bedrooms: 1,
    bathrooms: 1,
    type: "Loft",
    image: "/property-5.png",
    shabbyImage: "/shabby-apartment-5.png",
    realImage: "/apartment-5.png",
    tags: ["Histórico"],
    timeLeft: "4 días",
    progress: 2,
  },
  {
    id: "prop6",
    title: "Departamento en Belgrano",
    address: "Av. Cabildo 2500, Belgrano, CABA",
    barrio: "Belgrano",
    price: 135000,
    originalPrice: 160000,
    discount: 16,
    roi: 37,
    area: 85,
    bedrooms: 3,
    bathrooms: 2,
    type: "Depto",
    image: "/property-6.png",
    shabbyImage: "/shabby-apartment-6.png",
    realImage: "/apartment-6.png",
    tags: ["Oportunidad"],
    timeLeft: "6 días",
    progress: 3,
  },
  {
    id: "prop7",
    title: "Departamento en Matanza",
    address: "Av. Rivadavia 12500, Matanza, GBA",
    barrio: "Matanza",
    price: 65000,
    originalPrice: 80000,
    discount: 19,
    roi: 55,
    area: 60,
    bedrooms: 2,
    bathrooms: 1,
    type: "Depto",
    image: "/property-1.png",
    shabbyImage: "/shabby-apartment-7.png",
    realImage: "/apartment-1.png",
    tags: ["Oportunidad"],
    timeLeft: "3 días",
    progress: 1,
  },
  {
    id: "prop8",
    title: "Oficina en Microcentro",
    address: "Florida 500, Microcentro, CABA",
    barrio: "Microcentro",
    price: 110000,
    originalPrice: 140000,
    discount: 21,
    roi: 25,
    area: 75,
    bedrooms: 3,
    bathrooms: 1,
    type: "Depto",
    image: "/property-2.png",
    shabbyImage: "/shabby-apartment-8.png",
    realImage: "/apartment-2.png",
    tags: ["Comercial"],
    timeLeft: "8 días",
    progress: 5,
  },
  {
    id: "prop9",
    title: "Casa en Villa Urquiza",
    address: "Av. Triunvirato 3500, Villa Urquiza, CABA",
    barrio: "Villa Urquiza",
    price: 160000,
    originalPrice: 195000,
    discount: 18,
    roi: 41,
    area: 110,
    bedrooms: 3,
    bathrooms: 2,
    type: "Casa",
    image: "/property-4.png",
    shabbyImage: "/shabby-apartment-9.png",
    realImage: "/apartment-3.png",
    tags: ["Premium"],
    timeLeft: "5 días",
    progress: 2,
  },
]
