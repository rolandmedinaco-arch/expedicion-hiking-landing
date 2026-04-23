import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Mountain,
  Eye,
  Flower2,
  Home as HomeIcon,
  Trees,
  Utensils,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Leaf,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

/**
 * EXPEDICIÓN: ÁRBOL DE LAS VENTANAS
 * Landing page de senderismo de élite
 * Estética: "Neon Wilderness" - Negro puro + Verde neón (#CCFF00)
 * Tipografía: Montserrat 900 (títulos), Inter 400/600 (cuerpo)
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [healthConfirmed, setHealthConfirmed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 1. Tu validación original de salud
  if (!healthConfirmed) {
    alert("Por favor confirma que estás en óptimas condiciones de salud.");
    return;
  }

  // 2. Preparamos los datos para Netlify
  const data = new URLSearchParams({
    "form-name": "registro-expedicion",
    ...formData,
    "salud-confirmada": healthConfirmed ? "Sí" : "No"
  }).toString();

  try {
    // 3. Enviamos los datos a Netlify por debajo de la mesa
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data,
    });

    if (response.ok) {
      console.log("¡Formulario enviado con éxito a Netlify!");
      // 4. Activamos tu ventana de confirmación visual original
      setShowConfirmation(true); 
    } else {
      alert("Hubo un error al enviar el registro. Por favor, intenta de nuevo.");
    }
  } catch (error) {
    alert("Error de conexión. Revisa tu internet.");
  }
};

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setFormData({ nombre: "", whatsapp: "" });
    setHealthConfirmed(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER / NAVEGACIÓN */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-[#333333]">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
         <div className="flex items-center gap-2">
  <img 
    src="https://i.postimg.cc/x8CjKG3B/Logometa.png" 
    alt="Logo" 
    className="h-10 md:h-12 w-auto object-contain"
  />
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#experiencia" className="text-sm font-semibold hover:text-[#CCFF00] transition-colors">
              EXPERIENCIA
            </a>
            <a href="#viaje" className="text-sm font-semibold hover:text-[#CCFF00] transition-colors">
              VIAJE
            </a>
            <a href="#bienestar" className="text-sm font-semibold hover:text-[#CCFF00] transition-colors">
              BIENESTAR
            </a>
            <a href="#nutricion" className="text-sm font-semibold hover:text-[#CCFF00] transition-colors">
              NUTRICIÓN
            </a>
            <a href="#registro" className="text-sm font-semibold hover:text-[#CCFF00] transition-colors">
              REGISTRO
            </a>
          </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#registro" className="neon-button text-sm font-black hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 15px #CCFF00, 0 0 30px #CCFF00' }}>
                RESERVAR CUPO
              </a>
            </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#CCFF00]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-black border-t border-[#333333] p-4 space-y-4">
            <a href="#experiencia" className="block text-sm font-semibold hover:text-[#CCFF00]">
              METAMORFOSIS
            </a>
            <a href="#viaje" className="block text-sm font-semibold hover:text-[#CCFF00]">
              VIAJE
            </a>
            <a href="#bienestar" className="block text-sm font-semibold hover:text-[#CCFF00]">
              BIENESTAR
            </a>
            <a href="#nutricion" className="block text-sm font-semibold hover:text-[#CCFF00]">
              NUTRICIÓN
            </a>
            <a href="#registro" className="block text-sm font-semibold hover:text-[#CCFF00]">
              REGISTRO
            </a>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663513130352/aUe4GbAVkT2bNaZAyTcaoY/hero-mountain-dark-YqqerPn7gmxxTH7kNid3Nb.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-1" />

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-block">
              <span className="text-[#CCFF00] text-xs font-black tracking-widest" style={{ fontFamily: "Montserrat" }}>
                METAMORFOSIS PRESENTA
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              style={{ fontFamily: "Montserrat", color: "#FFFFFF" }}
            >
              ÁRBOL DE LAS
              <br />
              <span className="text-[#CCFF00]">VENTANAS</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Desconectate para Reconectar. Una experiencia de senderismo de élite en Fusagasugá que transforma tu cuerpo, mente y espíritu.
            </p>

            {/* Event Details */}
            <div className="flex flex-col md:flex-row gap-6 mb-10 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-[#CCFF00]" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }} />
                  <span>26 de Abril</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-[#CCFF00]" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }} />
                  <span>7:00 AM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#CCFF00]" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }} />
                  <span>Fusagasugá</span>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#registro" className="neon-button text-center font-black text-lg hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px #CCFF00, 0 0 40px #CCFF00' }}>
                RESERVAR CUPO ($74.900)
              </a>
              <a href="#viaje" className="neon-button-outline text-center font-black text-lg hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 15px #ffff, inset 0 0 5px #fffff' }}>
                CONOCER MÁS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA SECTION */}
      <section id="experiencia" className="py-20 md:py-32 bg-black border-t border-[#333333]">
        <div className="container">
          <div className="mb-16">
            <span className="text-[#CCFF00] text-xs font-black tracking-widest" style={{ fontFamily: "Montserrat" }}>
              LA EXPERIENCIA
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mt-4 leading-tight"
              style={{ fontFamily: "Montserrat" }}
            >
              Más que una caminata,<br />
              <span className="text-[#CCFF00]">una transformación</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#121212] p-8 border-l-4 border-[#CCFF00] hover:bg-[#1a1a1a] transition-colors hover:shadow-lg" style={{ boxShadow: '0 0 10px #CCFF00' }}>
              <div className="text-[#CCFF00] mb-4" style={{ filter: 'drop-shadow(0 0 10px #CCFF00)' }}>
                <Mountain size={40} />
              </div>
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: "Montserrat" }}>
                Ruta de Élite
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Recorre senderos seleccionados en Fusagasugá, diseñados para desafiarte físicamente mientras reconectas con la naturaleza.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#121212] p-8 border-l-4 border-[#CCFF00] hover:bg-[#1a1a1a] transition-colors hover:shadow-lg" style={{ boxShadow: '0 0 10px #CCFF00' }}>
              <div className="text-[#CCFF00] mb-4" style={{ filter: 'drop-shadow(0 0 10px #CCFF00)' }}>
                <Heart size={40} />
              </div>
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: "Montserrat" }}>
                Bienestar Integral
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Talleres de conexión emocional, meditación en movimiento y conexión con la naturaleza para una experiencia holística.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121212] p-8 border-l-4 border-[#CCFF00] hover:bg-[#1a1a1a] transition-colors hover:shadow-lg" style={{ boxShadow: '0 0 10px #CCFF00' }}>
              <div className="text-[#CCFF00] mb-4" style={{ filter: 'drop-shadow(0 0 10px #CCFF00)' }}>
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-black mb-3" style={{ fontFamily: "Montserrat" }}>
                Comunidad de Élite
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Conecta con personas que comparten tu pasión por el movimiento, el bienestar y la aventura en la naturaleza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY SECTION */}
      <section id="viaje" className="py-20 md:py-32 bg-black border-t border-[#333333]">
        <div className="container">
          <div className="mb-16">
            <span className="text-[#CCFF00] text-xs font-black tracking-widest" style={{ fontFamily: "Montserrat" }}>
              EL VIAJE
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mt-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Estaciones de la Expedición
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {/* Cascada del Cacique */}
            <div className="group cursor-pointer">
              <div
                className="relative h-64 md:h-72 rounded-lg overflow-hidden mb-4 border-2 border-[#333333] group-hover:border-[#CCFF00] transition-colors hover:shadow-lg"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663513130352/aUe4GbAVkT2bNaZAyTcaoY/waterfall-cascade-3uVjMH8ehsv63Z2LyDeod6.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: '0 0 15px #CCFF00'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Mountain size={32} className="text-[#CCFF00]" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }} />
                </div>
              </div>
              <h3 className="text-lg font-black" style={{ fontFamily: "Montserrat" }}>
                Cascada del Cacique
              </h3>
              <p className="text-sm text-gray-400 mt-2">Caída de agua majestuosa rodeada de vegetación nativa.</p>
            </div>

            {/* Mirador */}
            <div className="group cursor-pointer">
              <div
                className="relative h-64 md:h-72 rounded-lg overflow-hidden mb-4 border-2 border-[#333333] group-hover:border-[#CCFF00] transition-colors"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663513130352/aUe4GbAVkT2bNaZAyTcaoY/viewpoint-vista-UytDbkCy3CBzsJTmJDcm3U.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                  <Eye size={32} className="text-[#CCFF00]" />
                </div>
              </div>
              <h3 className="text-lg font-black" style={{ fontFamily: "Montserrat" }}>
                Mirador
              </h3>
              <p className="text-sm text-gray-400 mt-2">Vistas panorámicas del valle y las montañas circundantes.</p>
            </div>

            {/* Jardín de Colibríes */}
            <div className="group cursor-pointer">
              <div
                className="relative h-64 md:h-72 rounded-lg overflow-hidden mb-4 border-2 border-[#333333] group-hover:border-[#CCFF00] transition-colors"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663513130352/aUe4GbAVkT2bNaZAyTcaoY/hummingbird-garden-P7FMvgrRSpw5orGzHodeot.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Flower2 size={32} className="text-[#CCFF00]" />
                </div>
              </div>
              <h3 className="text-lg font-black" style={{ fontFamily: "Montserrat" }}>
                Jardín de Colibríes
              </h3>
              <p className="text-sm text-gray-400 mt-2">Oasis de flores y vida silvestre en la montaña.</p>
            </div>

            {/* Establos */}
            <div className="group cursor-pointer">
              <div
                className="relative h-64 md:h-72 rounded-lg overflow-hidden mb-4 border-2 border-[#333333] group-hover:border-[#CCFF00] transition-colors bg-[#1a1a1a]"
                         style={{
                  backgroundImage: `url('https://i.postimg.cc/XqXd1CgB/descarga-(4).jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <HomeIcon size={48} className="text-[#CCFF00]" />
                </div>
              </div>
              <h3 className="text-lg font-black" style={{ fontFamily: "Montserrat" }}>
                Establos
              </h3>
              <p className="text-sm text-gray-400 mt-2">Punto de descanso con vistas al valle.</p>
            </div>

            {/* Sendero de Árboles Nativos */}
            <div className="group cursor-pointer">
              <div
                className="relative h-64 md:h-72 rounded-lg overflow-hidden mb-4 border-2 border-[#333333] group-hover:border-[#CCFF00] transition-colors"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663513130352/aUe4GbAVkT2bNaZAyTcaoY/forest-path-native-trees-C5iaDWkwXXQUv6zvC5UWuv.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Trees size={32} className="text-[#CCFF00]" />
                </div>
              </div>
              <h3 className="text-lg font-black" style={{ fontFamily: "Montserrat" }}>
                Sendero Nativo
              </h3>
              <p className="text-sm text-gray-400 mt-2">Camino entre árboles ancestrales de la región.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS SECTION */}
      <section id="bienestar" className="py-20 md:py-32 bg-black border-t border-[#333333]">
        <div className="container">
          <div className="mb-16">
            <span className="text-[#CCFF00] text-xs font-black tracking-widest" style={{ fontFamily: "Montserrat" }}>
              BIENESTAR
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mt-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Tres Pilares de Transformación
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="bg-[#121212] p-8 border border-[#333333] hover:border-[#CCFF00] transition-colors hover:shadow-lg" style={{ boxShadow: '0 0 10px #CCFF00' }}>
              <div className="inline-block bg-[#1a1a1a] p-4 rounded-lg mb-6 border border-[#CCFF00]" style={{ boxShadow: '0 0 10px #CCFF00, inset 0 0 5px #CCFF00' }}>
                <Heart size={32} className="text-[#CCFF00]" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }} />
              </div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "Montserrat" }}>
                Taller de Bienestar Emocional
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Explora técnicas de inteligencia emocional y conexión interna en el corazón de la naturaleza.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-[#121212] p-8 border border-[#333333] hover:border-[#CCFF00] transition-colors hover:shadow-lg" style={{ boxShadow: '0 0 10px #CCFF00' }}>
              <div className="inline-block bg-[#1a1a1a] p-4 rounded-lg mb-6 border border-[#CCFF00]" style={{ boxShadow: '0 0 10px #CCFF00, inset 0 0 5px #CCFF00' }}>
                <Leaf size={32} className="text-[#CCFF00]" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }} />
              </div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "Montserrat" }}>
                Meditación en Movimiento
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Práctica de mindfulness integrada con la caminata para una experiencia de presencia plena.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-[#121212] p-8 border border-[#333333] hover:border-[#CCFF00] transition-colors hover:shadow-lg" style={{ boxShadow: '0 0 10px #CCFF00' }}>
              <div className="inline-block bg-[#1a1a1a] p-4 rounded-lg mb-6 border border-[#CCFF00]" style={{ boxShadow: '0 0 10px #CCFF00, inset 0 0 5px #CCFF00' }}>
                <Trees size={32} className="text-[#CCFF00]" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }} />
              </div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "Montserrat" }}>
                Conexión con la Naturaleza
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Talleres de ecología y reconexión con el entorno natural que nos rodea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION SECTION */}
      <section id="nutricion" className="py-20 md:py-32 bg-black border-t border-[#333333]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#CCFF00] text-xs font-black tracking-widest" style={{ fontFamily: "Montserrat" }}>
                FUEL YOUR BODY
              </span>
              <h2
                className="text-4xl md:text-5xl font-black mt-4 mb-6"
                style={{ fontFamily: "Montserrat" }}
              >
                Nutrición de Élite
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Después de tu experiencia de senderismo, disfruta de una comida cuidadosamente diseñada para recuperar energía y celebrar tu logro.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-[#CCFF00] mt-1" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }}>
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg" style={{ fontFamily: "Montserrat" }}>
                      Chicken Wrap Premium
                    </h3>
                    <p className="text-gray-400 text-sm">Pollo a la parrilla, vegetales frescos y salsa casera en tortilla.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#CCFF00] mt-1" style={{ filter: 'drop-shadow(0 0 8px #CCFF00)' }}>
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg" style={{ fontFamily: "Montserrat" }}>
                      Limonada Natural
                    </h3>
                    <p className="text-gray-400 text-sm">Bebida refrescante preparada con limones frescos y endulzante natural.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Event Details */}
            <div className="bg-[#121212] p-8 border-2 border-[#CCFF00] rounded-lg hover:shadow-lg transition-all" style={{ boxShadow: '0 0 20px #CCFF00, inset 0 0 10px #CCFF00' }}>
              <h3 className="text-2xl font-black mb-6" style={{ fontFamily: "Montserrat", color: '#CCFF00', textShadow: '0 0 10px #CCFF00' }}>
                Detalles del Evento
              </h3>

              <div className="space-y-6">
                <div className="border-b border-[#333333] pb-4">
                  <p className="text-[#CCFF00] text-sm font-black mb-2">FECHA</p>
                  <p className="text-lg">26 de Abril, 2026</p>
                </div>

                <div className="border-b border-[#333333] pb-4">
                  <p className="text-[#CCFF00] text-sm font-black mb-2">HORA</p>
                  <p className="text-lg">7:00 AM - 2:00 PM</p>
                </div>

                <div className="border-b border-[#333333] pb-4">
                  <p className="text-[#CCFF00] text-sm font-black mb-2">PUNTO DE ENCUENTRO</p>
                  <p className="text-lg">Colegio Pantano de Vargas</p>
                  <p className="text-sm text-gray-400">Fusagasugá, Cundinamarca</p>
                </div>

                <div className="border-b border-[#333333] pb-4">
                  <p className="text-[#CCFF00] text-sm font-black mb-2">INVERSIÓN</p>
                  <p className="text-3xl font-black">$74.900</p>
                  <p className="text-sm text-gray-400 mt-2">Incluye: Guía, comida, bebida y acceso a talleres</p>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-400 mb-4">
                    Cupos limitados. Se asignan por orden de llegada.
                  </p>
                  <a href="#registro" className="neon-button text-center block hover:scale-105 transition-transform duration-300" style={{ boxShadow: '0 0 20px #CCFF00, 0 0 40px #CCFF00' }}>
                    RESERVAR AHORA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section id="registro" className="py-20 md:py-32 bg-black border-t border-[#333333]">
        <div className="container max-w-2xl">
          <div className="mb-12">
            <span className="text-[#CCFF00] text-xs font-black tracking-widest" style={{ fontFamily: "Montserrat" }}>
              CONFIRMA TU CUPO
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mt-4"
              style={{ fontFamily: "Montserrat" }}
            >
              Formulario de Registro
            </h2>
            <p className="text-gray-400 mt-4">
              Completa el formulario para asegurar tu lugar en la Expedición. Los cupos son limitados.
            </p>
          </div>

        <form name="registro-expedicion" method="POST" data-netlify="true" onSubmit={handleSubmit} className="bg-[#121212] p-8 border-2 border-[#CCFF00] rounded-2xl flex flex-col gap-6">
  <input type="hidden" name="form-name" value="registro-expedicion" />
            <div>
              <Label htmlFor="nombre" className="text-white font-semibold mb-2 block">
                Nombre Completo *
              </Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ej: María García López"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="bg-black border-[#333333] text-white placeholder-gray-600 focus:border-[#CCFF00] focus:ring-[#CCFF00]"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <Label htmlFor="whatsapp" className="text-white font-semibold mb-2 block">
                Número de WhatsApp *
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="Ej: 300 123 4567"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="bg-black border-[#333333] text-white placeholder-gray-600 focus:border-[#CCFF00] focus:ring-[#CCFF00]"
              />
            </div>



            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="health"
                checked={healthConfirmed}
                onCheckedChange={(checked) => setHealthConfirmed(checked as boolean)}
              />
              <Label htmlFor="health" className="text-sm text-gray-400 cursor-pointer">
                Confirmo que me encuentro en óptimas condiciones de salud para participar en esta actividad física de intensidad moderada a alta.
              </Label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full font-black text-lg py-4 bg-white text-black hover:scale-105 transition-transform duration-300 rounded"
              style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)' }}
            >
              CONFIRMAR MI CUPO
            </button>

            <p className="text-xs text-gray-500 text-center">
              Al enviar este formulario aceptas los términos del evento. Los cupos son limitados y se asignan por orden de llegada.
            </p>
          </form>
        </div>
      </section>

      {/* Modal de Confirmación */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#121212] border-2 border-[#CCFF00] rounded-lg p-8 max-w-md w-full text-center" style={{ boxShadow: '0 0 40px #CCFF00, inset 0 0 20px #CCFF00' }}>
            {/* Checkmark Animation */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#CCFF00] flex items-center justify-center" style={{ boxShadow: '0 0 20px #CCFF00' }}>
                <svg className="w-10 h-10 text-[#CCFF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "Montserrat", color: "rgb(204, 255, 0)", textShadow: "0 0 10px #CCFF00" }}>
              ¡CUPO CONFIRMADO!
            </h2>

            <p className="text-gray-300 mb-2">
              Hola <span className="font-black text-[#CCFF00]">{formData.nombre}</span>,
            </p>

            <p className="text-gray-400 mb-6">
              Tu registro ha sido exitoso. Te esperamos el 26 de Abril en Fusagasugá. Nos comunicaremos contigo al número <span className="text-[#CCFF00] font-semibold">{formData.whatsapp}</span> con los detalles finales.
            </p>

            <div className="border-t border-[#333333] pt-6 mb-6">
              <p className="text-sm text-gray-400 mb-4">Únete a nuestra comunidad en WhatsApp para actualizaciones en tiempo real:</p>
              <a
                href="https://whatsapp.com/channel/0029Vb7If0C2ZjCmvpL18Z2h"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ccff00] text-black font-black px-8 py-3 rounded mb-4 hover:scale-105 transition-transform duration-300"
                style={{ boxShadow: '0 0 15px #ccff00' }}
              >
                📱 UNIRME AL CANAL DE WHATSAPP
              </a>
            </div>

          
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-black border-t border-[#333333] py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-black mb-4" style={{ fontFamily: "Montserrat" }}>
                <span className="text-[#CCFF00]">EXPEDICIÓN</span>
              </h3>
              <p className="text-sm text-gray-400">
                Transformando vidas a través de la aventura en la naturaleza.
              </p>
            </div>


            <div>
              <h4 className="font-black text-sm mb-4">CONTACTO</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>WhatsApp: +57 3142585702</li>
                <li>Fusagasugá, Colombia</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-sm mb-4">SÍGUENOS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
             <li><a href="https://www.instagram.com/metamorfosis.fusa" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00]">Instagram</a></li>

              </ul>
            </div>
          </div>

          <div className="border-t border-[#333333] pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 METAMORFOSIS (MAYCOL VARGAS): Árbol de las Ventanas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
