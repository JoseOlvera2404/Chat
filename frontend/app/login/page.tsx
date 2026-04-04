"use client";

import { useState, useEffect } from "react";
import { loginUser } from "@/src/services/auth.service";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import Link from "next/link";
import { startAuthentication } from "@simplewebauthn/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import api from "@/src/services/api";

export default function LoginPage() {

  const router = useRouter();
  const { login, user } = useAuth();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  useEffect(() => {

    if(user){
      router.push("/dashboard");
    }

  },[user,router]);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setError("");

    try {

      const data = await loginUser({
        email,
        password
      });

      login(data.token);

      router.push("/dashboard");

    } catch {

      setError("Credenciales inválidas");

    }

  };

  const handleBiometricLogin = async () => {

    try {

      if (!email) {
        setError("Ingresa tu email primero");
        return;
      }

      // 1. pedir opciones al backend
      const { data: options } = await api.post(
        "/webauthn/login/options",
        { email }
      );

      // 2. lanzar biometría (FaceID / huella)
      const credential = await startAuthentication(options);

      // 3. enviar al backend para verificar
      const { data } = await api.post(
        "/webauthn/login/verify",
        {
          email,
          credential
        }
      );

      // 4. login normal
      login(data.token);
      router.push("/dashboard");

    } catch (err) {

      console.error(err);
      setError("Error con biometría");

    }

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#0D0D0D]">

      <Card className="w-96 p-6 space-y-5 bg-[#121212] border-[#1F1F1F] shadow-xl">

        <div className="flex justify-center mb-2">
          <div className="w-10 h-1 rounded-full bg-[#9B4DFF]"></div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-medium text-white tracking-tight">
            Iniciar sesión
          </h1>

          <p className="text-sm text-gray-500">
            Accede a tu cuenta para comenzar a chatear
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <Input
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-[#1A1A1A] border-[#2F2F2F] text-white placeholder:text-gray-500 focus:border-[#9B4DFF] focus:ring-[#9B4DFF]/20"
          />

          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-[#1A1A1A] border-[#2F2F2F] text-white placeholder:text-gray-500 focus:border-[#9B4DFF] focus:ring-[#9B4DFF]/20"
          />

          {error && (
            <p className="text-sm text-red-400 text-center bg-red-500/10 py-2 rounded-lg">
              {error}
            </p>
          )}

          <Button className="w-full bg-[#9B4DFF] hover:bg-[#8B3DFF] text-white rounded-full h-11">
            Iniciar sesión
          </Button>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1F1F1F]"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-[#121212] text-gray-500">o</span>
            </div>
          </div>

          <Button
            type="button"
            onClick={handleBiometricLogin}
            className="w-full bg-[#1A1A1A] hover:bg-[#2F2F2F] text-white border border-[#2F2F2F] rounded-full h-11"
          >
            🔓 Iniciar con biometría
          </Button>

        </form>

        <p className="text-sm text-center text-gray-500 pt-2">

          ¿No tienes cuenta?{" "}
          <Link
            href="/register"
            className="text-[#9B4DFF] hover:text-[#8B3DFF] transition-colors"
          >
            Regístrate
          </Link>

        </p>

      </Card>

    </div>

  );

}