"use client";

import { useEffect, useState, useRef } from "react";
import { getConversations } from "@/src/services/conversation.service";
import ConversationItem from "./ConversationItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getSocket } from "@/src/services/socket.service";
import { useChat } from "@/src/context/ChatContext";

export default function ConversationList(){

  const [conversations,setConversations] = useState<any[]>([]);

  const socketRef = useRef<any>(null);

  const { activeConversation } = useChat();

  useEffect(()=>{

    const load = async () => {

      const data = await getConversations();

      setConversations(data);

    };

    load();

    try{
      socketRef.current = getSocket();
    }catch{
      return;
    }

    const handleMessage = (msg:any)=>{

      const convId = msg.conversationId || msg.conversation_id;

      setConversations(prev => {

        const updated = prev.map((c:any)=>{

          if(String(c.id) === String(convId)){

            const isActive = String(activeConversation?.id) === String(convId);

            return {
              ...c,
              last_message: msg.content,
              unread_count: isActive ? 0 : (c.unread_count || 0) + 1
            };

          }

          return c;

        });

        // mover conversación al inicio
        const sorted = [...updated].sort((a,b)=>{
          if(String(a.id) === String(convId)) return -1;
          if(String(b.id) === String(convId)) return 1;
          return 0;
        });

        return sorted;

      });

    };

    socketRef.current.on("new_message",handleMessage);

    return ()=>{
      socketRef.current?.off("new_message",handleMessage);
    };

  },[activeConversation]);

  // =============================
  // RESET UNREAD CUANDO ABRES CHAT
  // =============================

  useEffect(()=>{

    if(!activeConversation) return;

    setConversations(prev => {

      return prev.map(c => {

        if(String(c.id) === String(activeConversation.id)){

          return {
            ...c,
            unread_count: 0
          };

        }

        return c;

      });

    });

  },[activeConversation]);

  return(

    <ScrollArea className="h-[calc(100vh-60px)]">

      {conversations.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-gray-400 text-sm">Sin conversaciones</p>
          <p className="text-gray-500 text-xs mt-1">Busca usuarios para comenzar a chatear</p>
        </div>
      ) : (
        conversations.map((c:any)=>(
          <ConversationItem
            key={c.id}
            conversation={c}
          />
        ))
      )}

    </ScrollArea>

  )

}