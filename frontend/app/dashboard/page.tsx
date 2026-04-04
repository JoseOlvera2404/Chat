"use client";

import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ChatLayout from "@/components/chat/ChatLayout";

export default function DashboardPage(){

  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {

    if(!loading && !user){
      router.push("/login");
    }

  }, [user, loading, router]);

  if(loading){
    return (
      <div className="h-screen flex items-center justify-center bg-[#0D0D0D]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#9B4DFF] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm">Cargando...</p>
        </div>
      </div>
    )
  }

  if(!user){
    return null;
  }

  return <ChatLayout/>;

}