"use client";

import ChatHeader from "./ChatHeader";
import MessageList from "../messages/MessageList";
import MessageInput from "../messages/MessageInput";

export default function ChatWindow(){

  return(

    <div className="flex flex-1 flex-col h-full overflow-hidden bg-[#0D0D0D]">

      <ChatHeader/>

      <div className="flex-1 overflow-hidden bg-[#0D0D0D]">
        <MessageList/>
      </div>

      <MessageInput/>

    </div>

  )

}