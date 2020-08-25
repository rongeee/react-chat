import React from "react";
import { useRef } from "react";

export default function ChatInput({ msgURL, handlePostMessage }) {
  const messageInputField = useRef();

  const handleOnClick = () => {
    const msg = messageInputField.current.value;
    handlePostMessage(msg);
    messageInputField.current.value = "";
  };

  return (
    <div>
      <div>
        <input type="text" ref={messageInputField} />
        <button onClick={handleOnClick}>Send</button>
      </div>
    </div>
  );
}
