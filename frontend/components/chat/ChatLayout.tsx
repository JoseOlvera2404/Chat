"use client";

import ChatSidebar from "./sidebar/ChatSidebar";
import ChatWindow from "./window/ChatWindow";

export default function ChatLayout(){

  return(

    <div className="flex h-screen bg-[#0D0D0D]">

      <ChatSidebar/>

      <ChatWindow/>

    </div>

  )

}