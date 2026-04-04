"use client";

import { useState, useEffect } from "react";
import { getFriends } from "@/src/services/friend.service";
import { createDirectConversation } from "@/src/services/conversation.service";
import { useChat } from "@/src/context/ChatContext";

export default function NewConversationButton(){

  const [open,setOpen] = useState(false);
  const [friends,setFriends] = useState<any[]>([]);

  const { setActiveConversation } = useChat();

  useEffect(()=>{

    const loadFriends = async ()=>{

      const data = await getFriends();
      setFriends(data);

    };

    if(open){
      loadFriends();
    }

  },[open]);

  const startChat = async (userId:string)=>{

    const res = await createDirectConversation(userId);

    setActiveConversation({
      id: res.conversationId
    });

    setOpen(false);

  };

  return(

    <>

      <button
        onClick={()=>setOpen(true)}
        className="w-6 h-6 rounded-full bg-[#9B4DFF] hover:bg-[#8B3DFF] text-white flex items-center justify-center text-lg font-medium transition-colors"
      >
        +
      </button>

      {open && (

        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-[#121212] rounded-2xl p-5 w-96 shadow-2xl border border-[#1F1F1F]">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-semibold text-lg">
                Nueva conversación
              </h2>
              <button
                onClick={()=>setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto">

              {friends.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400 text-sm">No tienes amigos agregados</p>
                  <p className="text-gray-500 text-xs mt-1">Busca usuarios para comenzar</p>
                </div>
              ) : (
                friends.map(friend=>(
                  <div
                    key={friend.id}
                    className="flex justify-between items-center p-3 bg-[#1A1A1A] rounded-xl hover:bg-[#1F1F1F] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9B4DFF] to-[#7B3DFF] flex items-center justify-center">
                        <span className="text-white text-xs font-medium">
                          {friend.name?.charAt(0) || "U"}
                        </span>
                      </div>
                      <span className="text-white text-sm font-medium">
                        {friend.name}
                      </span>
                    </div>
                    <button
                      onClick={()=>startChat(friend.id)}
                      className="text-[#9B4DFF] hover:text-[#8B3DFF] text-sm px-3 py-1 rounded-lg hover:bg-[#9B4DFF]/10 transition-colors"
                    >
                      Chat →
                    </button>
                  </div>
                ))
              )}

            </div>

          </div>

        </div>

      )}

    </>

  );

}