import React from "react";
import { useRef } from "react";

export default function ChatInput({ handlePostMessage }) {
  const messageInputField = useRef();

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
