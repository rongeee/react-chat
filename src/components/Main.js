import React from 'react'
import ChatRoom from './ChatRoom'
import { useState, useEffect } from 'react';
import { ChatContext } from "../contexts/ChatContext";

export default function Main() {
  let [chatRoom, setChatRoom] = useState({});
  
  const handleGetChatRoom = () => {
    const CHAT_ROOM_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json";
    const url = CHAT_ROOM_URL;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setChatRoom(data);
    });
  };


  
  
  useEffect(() => {
    handleGetChatRoom();
  }, []);


    return (
        <div>
          <ChatContext.Provider value={{chatRoom: chatRoom, handleGetChatRoom: handleGetChatRoom, setChatRoom: setChatRoom}}>
            <ChatRoom />
          </ChatContext.Provider>
        </div>
    )
}
