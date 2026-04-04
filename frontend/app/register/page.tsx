"use client";

import { useState } from "react";
import {
  registerUser,
  requestRegisterCode
} from "@/src/services/auth.service";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function RegisterPage(){

  const router = useRouter();

  const [step,setStep] = useState(1);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [code,setCode] = useState("");

  const [error,setError] = useState("");

  const sendCode = async ()=>{

    try{

      await requestRegisterCode(email);

      setStep(2);

    }catch{

      setError("No se pudo enviar el código");

    }

  };

  const handleRegister = async (e:React.FormEvent)=>{

    e.preventDefault();

    try{

      await registerUser({
        name,
        email,
        password,
        code
      });

      router.push("/login");

    }catch{

      setError("Código inválido");

    }

  };

  return(

    <div className="flex min-h-screen items-center justify-center bg-[#0D0D0D]">

      <Card className="w-96 p-6 space-y-5 bg-[#121212] border-[#1F1F1F] shadow-xl">

        <div className="flex justify-center mb-2">
          <div className="w-10 h-1 rounded-full bg-[#9B4DFF]"></div>
        </div>

        <h1 className="text-2xl font-medium text-white text-center tracking-tight">
          Crear cuenta
        </h1>

        <p className="text-gray-500 text-sm text-center -mt-2">
          Comienza a comunicarte hoy
        </p>

        {step === 1 && (

          <div className="space-y-4">

            <Input
              placeholder="Nombre"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="bg-[#1A1A1A] border-[#2F2F2F] text-white placeholder:text-gray-500 focus:border-[#9B4DFF] focus:ring-[#9B4DFF]/20"
            />

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

            <Button
              onClick={sendCode}
              className="w-full bg-[#9B4DFF] hover:bg-[#8B3DFF] text-white rounded-full h-11"
            >
              Enviar código
            </Button>

          </div>

        )}

        {step === 2 && (

          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >

            <Input
              placeholder="Código de verificación"
              value={code}
              onChange={(e)=>setCode(e.target.value)}
              className="bg-[#1A1A1A] border-[#2F2F2F] text-white placeholder:text-gray-500 focus:border-[#9B4DFF] focus:ring-[#9B4DFF]/20 text-center text-lg tracking-widest"
            />

            <Button
              type="submit"
              className="w-full bg-[#9B4DFF] hover:bg-[#8B3DFF] text-white rounded-full h-11"
            >
              Crear cuenta
            </Button>

          </form>

        )}

        {error && (
          <p className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg">
            {error}
          </p>
        )}

        <p className="text-sm text-center text-gray-500 pt-2">

          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            className="text-[#9B4DFF] hover:text-[#8B3DFF] transition-colors"
          >
            Inicia sesión
          </Link>

        </p>

      </Card>

    </div>

  );

}