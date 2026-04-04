"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "@/src/context/ChatContext";

export default function ConversationItem({ conversation }: any) {

  const { setActiveConversation } = useChat();

  const handleClick = () => {
    setActiveConversation(conversation);
  };

  return (

    <div
      onClick={handleClick}
      className="flex items-center gap-3 p-3 mx-2 my-1 rounded-xl hover:bg-[#1A1A1A] cursor-pointer transition-all duration-200 group"
    >

      <Avatar className="border-2 border-[#2F2F2F] group-hover:border-[#9B4DFF] transition-colors">

        {conversation.avatar && (
          <AvatarImage src={conversation.avatar} />
        )}

        <AvatarFallback className="bg-[#1F1F1F] text-white">
          {conversation.name?.[0] ?? "U"}
        </AvatarFallback>

      </Avatar>

      <div className="flex-1 min-w-0">

        <div className="flex justify-between items-center gap-2">

          <div className="font-medium text-white truncate">
            {conversation.name}
          </div>

          {conversation.unread_count > 0 && (
            <div className="text-xs bg-[#9B4DFF] text-white px-2 py-0.5 rounded-full font-medium min-w-[20px] text-center">
              {conversation.unread_count}
            </div>
          )}

        </div>

        <div className="text-sm text-gray-400 truncate">
          {conversation.last_message ?? "Sin mensajes"}
        </div>

      </div>

    </div>

  );

}