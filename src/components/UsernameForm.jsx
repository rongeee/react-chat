import React from "react";
import { useRef, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

export default function UsernameForm() {
  const setUsername = useContext(ChatContext).setUsername;
  const getChat = useContext(ChatContext).handleGetChatRoom;

  const usernameInput = useRef();

  const handleOnClick = () => {
    const username = usernameInput.current.value;
    setUsername(username);
    getChat();
  };

  const enterSend = (event) => {
    if (event.key === "Enter") {
      setUsername(usernameInput.current.value);
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center flex-column align-items-center">
      <p>Please enter username</p>
      <input
        className="m-2"
        ref={usernameInput}
        type="text"
        onKeyPress={enterSend}
        autoFocus
      />
      <button className="btn-primary" onClick={() => handleOnClick()}>
        Save Username
      </button>
    </div>
  );
}
