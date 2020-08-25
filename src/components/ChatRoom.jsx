import React from "react";
import { useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

export default function ChatRoom() {
  const CHAT_ROOM_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json";
  const MESSAGE_LIST_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json";
  let [chatRoom, setChatRoom] = useState({});

  const handlePostMessage = (message) => {
    const data = {
      message: message,
    };
    const url = MESSAGE_LIST_URL;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        handleGetChatRoom(CHAT_ROOM_URL);
      });
  };

  const handleGetChatRoom = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setChatRoom(data);
      });
  };

  useEffect(() => {
    handleGetChatRoom(CHAT_ROOM_URL);
  }, []);

  return (
    <div>
      <h1>{chatRoom.name}</h1>

      <ChatInput handlePostMessage={handlePostMessage} />

      {chatRoom.messages &&
        Object.entries(chatRoom.messages)
          .reverse()
          .map((item) => {
            const key = item[0];
            const payload = item[1];
            console.log(payload);
            return <Messages key={key} payload={payload} />;
          })}
    </div>
  );
}
