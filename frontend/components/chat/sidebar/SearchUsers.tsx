"use client";

import { useEffect, useState } from "react";
import api from "@/src/services/api";
import {
  getFriendStatus,
  sendFriendRequest,
  getFriends
} from "@/src/services/friend.service";

export default function SearchUsers(){

  const [query,setQuery] = useState("");
  const [results,setResults] = useState<any[]>([]);
  const [friends,setFriends] = useState<string[]>([]);

  // cargar amigos
  useEffect(()=>{

    const loadFriends = async ()=>{

      const data = await getFriends();

      setFriends(data.map((f:any)=>String(f.id)));

    };

    loadFriends();

  },[]);

  const search = async (value:string)=>{

    setQuery(value);

    if(value.length < 2){
      setResults([]);
      return;
    }

    const res = await api.get("/users/search?q="+value);

    const users = await Promise.all(

      res.data.map(async (user:any)=>{

        const status = await getFriendStatus(user.id);

        return {
          ...user,
          friendStatus: status.status
        };

      })

    );

    setResults(users);

  };

  const addFriend = async (userId:string)=>{

    try{

      await sendFriendRequest(userId);

      alert("Solicitud enviada");

    }catch(e:any){

      alert(e.response?.data?.message || "Error");

    }

  };

  return(

    <div className="p-3 border-b border-[#1F1F1F]">

      <div className="relative">
        <input
          value={query}
          onChange={(e)=>search(e.target.value)}
          placeholder="Buscar usuarios..."
          className="w-full bg-[#1A1A1A] border border-[#2F2F2F] rounded-xl p-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#9B4DFF] focus:ring-1 focus:ring-[#9B4DFF]/20 transition-all"
        />
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">

        {results.length > 0 && query.length >= 2 && (
          <div className="text-xs text-gray-500 px-1 pb-2">
            {results.length} resultado{results.length !== 1 ? 's' : ''}
          </div>
        )}

        {results.map(user => {

          return(

            <div
              key={user.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2F2F2F] to-[#1F1F1F] flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    {user.name?.charAt(0) || "U"}
                  </span>
                </div>
                <span className="text-white text-sm">{user.name}</span>
              </div>

              {user.friendStatus === "accepted" && (
                <span className="text-xs text-gray-500 bg-[#1A1A1A] px-2 py-1 rounded-full">
                  Amigos
                </span>
              )}

              {user.friendStatus === "pending" && (
                <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                  Pendiente
                </span>
              )}

              {user.friendStatus === "none" && (
                <button
                  onClick={()=>addFriend(user.id)}
                  className="text-xs text-[#9B4DFF] hover:text-[#8B3DFF] bg-[#9B4DFF]/10 hover:bg-[#9B4DFF]/20 px-3 py-1 rounded-full transition-colors"
                >
                  Agregar
                </button>
              )}

              {user.friendStatus === "blocked" && (
                <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded-full">
                  Bloqueado
                </span>
              )}

            </div>

          )

        })}

        {query.length >= 2 && results.length === 0 && (
          <div className="text-center py-6">
            <p className="text-gray-400 text-sm">No se encontraron usuarios</p>
            <p className="text-gray-500 text-xs mt-1">Intenta con otro nombre</p>
          </div>
        )}

      </div>

    </div>

  )

}