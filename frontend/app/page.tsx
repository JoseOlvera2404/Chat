import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col">

      {/* Header */}
      <header className="border-b border-purple-200 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="font-bold text-xl bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
            Sistema de Mensajería
          </h1>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:text-purple-800">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-md">
                Registro
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
            Aplicación de Mensajería en Tiempo Real
          </h2>
          <p className="text-purple-800 text-lg">
            Esta aplicación forma parte de una práctica de la materia
            <strong> Computación en la Nube</strong>.
            Permite a los usuarios comunicarse en tiempo real utilizando
            WebSockets, almacenamiento en la nube y una arquitectura moderna
            basada en microservicios.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/downloads/ChatApp.apk" download>
              <Button size="lg" variant="secondary" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                Descargar APK
              </Button>
            </a>
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg">
                Crear cuenta
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-700 hover:bg-purple-50">
                Iniciar sesión
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto p-4 text-center text-sm text-purple-500">
          Proyecto académico · Computación en la Nube
        </div>
      </footer>
    </main>
  );
}