"use client";

import { useAuth } from "@/src/context/AuthContext";
import Link from "next/link";

export default function UserProfile(){

  const { user, logout } = useAuth();

  if(!user) return null;

  return(

    <div className="p-4 bg-[#0D0D0D]">

      <div className="flex items-center gap-3 mb-4">

        <div className="relative">
          <img
            src={user.profile_picture_url || "/avatar.png"}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#2F2F2F]"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0D0D0D]"></div>
        </div>

        <div className="flex flex-col">

          <span className="font-semibold text-white text-sm">
            {user.name}
          </span>

          <span className="text-xs text-gray-500">
            {user.email}
          </span>

        </div>

      </div>

      <div className="flex justify-between pt-3 border-t border-[#1F1F1F]">

        <Link
          href="/settings"
          className="text-xs text-gray-400 hover:text-[#9B4DFF] transition-colors flex items-center gap-1"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Configuración
        </Link>

        <button
          onClick={logout}
          className="text-xs text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar sesión
        </button>

      </div>

    </div>

  )

}