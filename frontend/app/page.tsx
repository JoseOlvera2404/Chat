import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex flex-col">

      {/* Hero Section - Ahora primero */}
      <section className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl text-center space-y-8">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 mx-auto mb-4">
            <span className="text-purple-200 text-sm font-medium">✨ Comunicación Instantánea</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Conecta sin límites
          </h1>
          
          <p className="text-purple-100 text-xl md:text-2xl leading-relaxed">
            Experimenta la nueva era de la mensajería en la nube. 
            <span className="block mt-2 text-purple-200 text-lg">
              Tecnología de punta, conversaciones reales.
            </span>
          </p>

          <div className="flex justify-center gap-4 flex-wrap pt-4">
            <Link href="/register">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 shadow-xl font-semibold px-8">
                Comenzar ahora →
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                Ya tengo cuenta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Nueva sección */}
      <section className="bg-white/5 backdrop-blur-sm py-16 px-4 border-y border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-semibold text-xl">Tiempo Real</h3>
              <p className="text-purple-200">Mensajes instantáneos con WebSockets</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="text-white font-semibold text-xl">En la Nube</h3>
              <p className="text-purple-200">Arquitectura moderna de microservicios</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-white font-semibold text-xl">Multiplataforma</h3>
              <p className="text-purple-200">Web y Android en una sola solución</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="bg-purple-500/10 rounded-2xl p-8 border border-purple-400/20">
            <h2 className="text-3xl font-bold text-white mb-3">
              📲 Lleva la experiencia contigo
            </h2>
            <p className="text-purple-100 mb-6">
              Descarga nuestra aplicación móvil y mantente conectado donde quiera que estés
            </p>
            <a href="/downloads/ChatApp.apk" download>
              <Button size="lg" className="bg-purple-500 hover:bg-purple-400 text-white shadow-lg px-8">
                ⬇️ Descargar APK
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-purple-300 text-sm">
            ✨ Proyecto académico · Computación en la Nube ✨
          </p>
          <p className="text-purple-400/60 text-xs mt-2">
            Tecnología de vanguardia para comunicación moderna
          </p>
        </div>
      </footer>

    </main>
  );
}