import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] flex flex-col">

      {/* Header - Minimalista */}
      <header className="border-b border-[#1F1F1F] bg-[#0D0D0D]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#9B4DFF]"></div>
            <h1 className="font-medium text-white text-lg tracking-tight">
              Mensajería
            </h1>
          </div>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-[#1F1F1F]">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-[#9B4DFF] hover:bg-[#8B3DFF] text-white rounded-full px-6">
                Crear cuenta
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Estilo Nu */}
      <section className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Texto */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1F1F1F] rounded-full px-3 py-1 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B4DFF] animate-pulse"></span>
                <span className="text-xs text-gray-400">+500 usuarios activos</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Mensajería que
                <span className="text-[#9B4DFF]"> fluye</span>
              </h1>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                Comunicación instantánea con la potencia de la nube. 
                Simple, rápida y sin complicaciones.
              </p>

              <div className="flex gap-3 pt-4">
                <Link href="/register">
                  <Button className="bg-[#9B4DFF] hover:bg-[#8B3DFF] text-white rounded-full px-6 h-12 text-base">
                    Comenzar gratis
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="border-[#2F2F2F] text-white hover:bg-[#1F1F1F] rounded-full px-6 h-12 text-base">
                    Ya tengo cuenta
                  </Button>
                </Link>
              </div>

              {/* Stats minimalistas */}
              <div className="flex gap-6 pt-8">
                <div>
                  <div className="text-white font-semibold text-xl">&lt;100ms</div>
                  <div className="text-gray-500 text-sm">de latencia</div>
                </div>
                <div className="w-px h-8 bg-[#2F2F2F]"></div>
                <div>
                  <div className="text-white font-semibold text-xl">99.9%</div>
                  <div className="text-gray-500 text-sm">disponibilidad</div>
                </div>
                <div className="w-px h-8 bg-[#2F2F2F]"></div>
                <div>
                  <div className="text-white font-semibold text-xl">24/7</div>
                  <div className="text-gray-500 text-sm">soporte</div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Elemento visual minimalista */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-[#9B4DFF]/20 to-transparent border border-[#2F2F2F] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-3">💬</div>
                    <p className="text-gray-400 text-sm">Conecta en tiempo real</p>
                  </div>
                </div>
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#9B4DFF]/10 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#9B4DFF]/5 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Grid minimalista */}
      <section className="border-t border-[#1F1F1F] bg-[#0A0A0A] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-white mb-2">Todo lo que necesitas</h2>
            <p className="text-gray-500">Sin funciones innecesarias, solo lo esencial</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Instantáneo", desc: "Mensajes en tiempo real con WebSockets" },
              { icon: "☁️", title: "En la nube", desc: "Arquitectura moderna de microservicios" },
              { icon: "📱", title: "Multiplataforma", desc: "Web y Android sincronizados" }
            ].map((feature, i) => (
              <div key={i} className="bg-[#121212] rounded-2xl p-6 border border-[#1F1F1F] hover:border-[#9B4DFF]/30 transition-all">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA - Minimalista */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#121212] rounded-2xl p-8 md:p-12 border border-[#2F2F2F] text-center">
            <h2 className="text-3xl font-medium text-white mb-3">
              Llévanos a todas partes
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Descarga la app y mantente conectado donde sea que estés
            </p>
            <a href="/downloads/ChatApp.apk" download>
              <Button className="bg-white hover:bg-gray-100 text-black rounded-full px-8 h-12">
                ⬇️ Descargar APK
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimalista */}
      <footer className="border-t border-[#1F1F1F] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9B4DFF]"></div>
              <span className="text-gray-500 text-sm">Computación en la Nube</span>
            </div>
            <div className="flex gap-6">
              <span className="text-gray-600 text-xs">© 2024 Proyecto académico</span>
              <span className="text-gray-600 text-xs">v1.0</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}