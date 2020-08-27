import React from "react";
import { useContext } from "react";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import Header from "./Header";
import { ChatContext } from "../contexts/ChatContext";

export default function ChatRoom() {
  const chatRoom = useContext(ChatContext).chatRoom;
  const updateChat = useContext(ChatContext).handleGetChatRoom;
  const urlKey = useContext(ChatContext).urlKey;
  const username = useContext(ChatContext).username;

  console.log(chatRoom);

  const MESSAGE_LIST_URL = `https://mock-data-api.firebaseio.com/chatrooms/${urlKey}/messages.json`;

  const handlePostMessage = (message) => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;

    const data = {
      message: message,
      username: username,
      time: time,
    };
    const url = MESSAGE_LIST_URL;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        updateChat(urlKey);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Header heading={chatRoom.name} />
          <p>Your username is {username}</p>

          <ChatInput handlePostMessage={handlePostMessage} />
          <Messages />
        </div>
      </div>
    </div>
  );
}
