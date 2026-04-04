"use client";

import ConversationList from "./ConversationList";
import UserProfile from "./UserProfile";
import SearchUsers from "./SearchUsers";
import FriendRequests from "./FriendRequest";
import NewConversationButton from "./NewConversationButton";

export default function ChatSidebar(){

  return(

    <div className="w-80 bg-[#0D0D0D] flex flex-col h-full overflow-hidden border-r border-[#1F1F1F]">

      {/* Perfil de usuario - área superior */}
      <div className="p-4 border-b border-[#1F1F1F]">
        <UserProfile/>
      </div>

      {/* Búsqueda de usuarios */}
      <div className="px-4 pt-4 pb-2">
        <SearchUsers/>
      </div>

      {/* Solicitudes de amistad */}
      <div className="px-4 pb-2">
        <FriendRequests/>
      </div>

      {/* Header de conversaciones */}
      <div className="px-4 py-3 flex justify-between items-center border-t border-[#1F1F1F] mt-2">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          Conversaciones
        </span>

        <NewConversationButton/>
      </div>

      {/* Lista de conversaciones */}
      <div className="flex-1 overflow-y-auto">
        <ConversationList/>
      </div>

    </div>

  )

}