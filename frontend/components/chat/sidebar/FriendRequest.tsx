"use client";

import { useEffect, useState } from "react";
import {
  getFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest
} from "@/src/services/friend.service";

export default function FriendRequests(){

  const [requests,setRequests] = useState<any[]>([]);
  const [open,setOpen] = useState(false);

  const loadRequests = async ()=>{

    const data = await getFriendRequests();

    setRequests(data);

  };

  useEffect(()=>{

    loadRequests();

  },[]);

  const accept = async (id:string)=>{

    await acceptFriendRequest(id);

    setRequests(prev => prev.filter(r=>r.id!==id));

  };

  const reject = async (id:string)=>{

    await rejectFriendRequest(id);

    setRequests(prev => prev.filter(r=>r.id!==id));

  };

  return(

    <div className="border-b border-[#1F1F1F]">

      <button
        onClick={()=>setOpen(!open)}
        className="w-full p-3 text-left flex justify-between items-center hover:bg-[#1A1A1A] transition-colors rounded-lg"
      >
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          Solicitudes
        </span>
        {requests.length > 0 && (
          <span className="text-xs bg-[#9B4DFF] text-white rounded-full px-2 py-0.5 min-w-[20px] text-center">
            {requests.length}
          </span>
        )}
      </button>

      {open && (

        <div className="p-3 space-y-2">

          {requests.length === 0 && (
            <p className="text-sm text-gray-500 text-center py-4">
              No hay solicitudes pendientes
            </p>
          )}

          {requests.map(req => (

            <div
              key={req.id}
              className="flex items-center justify-between p-2 bg-[#1A1A1A] rounded-lg"
            >

              <span className="text-white text-sm font-medium">{req.name}</span>

              <div className="flex gap-2">

                <button
                  onClick={()=>accept(req.id)}
                  className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-md hover:bg-green-500/10 transition-colors"
                >
                  Aceptar
                </button>

                <button
                  onClick={()=>reject(req.id)}
                  className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded-md hover:bg-red-500/10 transition-colors"
                >
                  Rechazar
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}