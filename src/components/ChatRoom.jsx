import React from "react";
import { useState, useRef, useContext } from "react";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import Header from "./Header";
import { ChatContext } from "../contexts/ChatContext";

export default function ChatRoom() {
  let [username, setUsername] = useState(null);

  const chatRoom = useContext(ChatContext).chatRoom;
  const updateChat = useContext(ChatContext).handleGetChatRoom;

  const usernameInput = useRef();

  const MESSAGE_LIST_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json";

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
        updateChat();
      });
  };

  const renderChatRoom = () => {
    return (
      <div>
        <Header heading={chatRoom.name} />
        <p>Your username is {username}</p>
        <ChatInput handlePostMessage={handlePostMessage} />
        {chatRoom.messages && <Messages />}
      </div>
    );
  };

  const enterSend = (event) => {
    if (event.key === "Enter") {
      setUsername(usernameInput.current.value);
    }
  };

  const renderUsernameForm = () => {
    return (
      <div>
        <p>Please enter username</p>
        <input
          ref={usernameInput}
          type="text"
          onKeyPress={enterSend}
          autoFocus
        />
        <button onClick={() => setUsername(usernameInput.current.value)}>
          Save Username
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {username ? renderChatRoom() : renderUsernameForm()}

          {/* <ChatInput handlePostMessage={handlePostMessage} />
          {chatRoom.messages && <Messages messages={chatRoom.messages} />} */}
        </div>
      </div>
    </div>
  );
}
