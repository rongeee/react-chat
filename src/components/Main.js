import React from "react";
import { useState, useEffect } from "react";
import { ChatContext } from "../contexts/ChatContext";
import LayoutSimple from "./LayoutSimple";
import UsernameForm from "./UsernameForm";
import FadeIn from "react-fade-in";

export default function Main() {
  let [chatRoom, setChatRoom] = useState({});
  let [chatRooms, setChatRooms] = useState({});
  let [urlKey, setUrlKey] = useState();
  let [username, setUsername] = useState(null);

  const handleGetChatRoom = (key) => {
    let url;
    if (key) {
      url = `https://mock-data-api.firebaseio.com/chatrooms/${key}.json`;
    } else {
      url = `https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json`;
      setUrlKey("-MFZumveIpHH5D_gkUHJ");
    }

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
          username,
          setUsername,
        }}
      >
        <FadeIn delay={100} transitionDuration={300}>
          {username ? <LayoutSimple /> : <UsernameForm />}
        </FadeIn>
      </ChatContext.Provider>
    </div>
  );
}
