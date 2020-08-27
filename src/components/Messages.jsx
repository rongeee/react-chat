import React from "react";
import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import Msg from "./Msg";

export default function Messages() {
  const messages = useContext(ChatContext).chatRoom.messages;

  return (
    <ul className="list-group">
      {messages &&
        Object.entries(messages)
          .reverse()
          .map((item) => {
            const key = item[0];
            const payload = item[1];

            let username = payload.username;
            if (payload.userName) username = payload.userName;
            return (
              <Msg
                key={key}
                username={username}
                msg={payload.message}
                time={payload.time}
              />
            );
          })}
    </ul>
  );
}
