import React from "react";
import { useRef, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

export default function ChatInput({ handlePostMessage }) {
  const messageInputField = useRef();
  const setChatRoom = useContext(ChatContext).setChatRoom;

  const handleOnClick = () => {
    const msg = messageInputField.current.value;
    handlePostMessage(msg);
    messageInputField.current.value = "";
  };

  const enterSend = (event) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div className="form">
      <div className="form-group mb-2">
        <input
          type="text"
          ref={messageInputField}
          className="form-control"
          placeholder="Enter message..."
          onKeyPress={enterSend}
          autoFocus
        />
        <button
          onClick={handleOnClick}
          className="btn btn-primary btn-block mb-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
