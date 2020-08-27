import React from "react";
import ChatRoom from "./ChatRoom";
import { useState, useEffect } from "react";
import { ChatContext } from "../contexts/ChatContext";
import LayoutSimple from "./LayoutSimple";

export default function Main() {
  let [chatRoom, setChatRoom] = useState({});
  let [chatRooms, setChatRooms] = useState({});
  let [urlKey, setUrlKey] = useState();

  const handleGetChatRoom = (key) => {
    const CHAT_ROOM_URL = `https://mock-data-api.firebaseio.com/chatrooms/${key}.json`;
    const url = CHAT_ROOM_URL;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setChatRoom(data);
        console.log(data);
      });
  };

  const getChatRooms = () => {
    const CHAT_ROOM_URL = "https://mock-data-api.firebaseio.com/chatrooms.json";
    const url = CHAT_ROOM_URL;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setChatRooms(data);
      });
  };

  useEffect(() => {
    getChatRooms();
    handleGetChatRoom("-MFZumveIpHH5D_gkUHJ");
  }, []);

  return (
    <div>
      <ChatContext.Provider
        value={{
          chatRooms,
          getChatRooms,
          setChatRoom,
          setUrlKey,
          urlKey,
          handleGetChatRoom,
          chatRoom,
        }}
      >
        <LayoutSimple />
      </ChatContext.Provider>
    </div>
  );
}
