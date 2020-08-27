import React from "react";
import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

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
            console.log(payload);
            let username = payload.username;
            if (payload.userName) username = payload.userName;
            return (
              <li className="list-group-item" key={key}>
                <p>
                  {typeof payload.message === "string" ? (
                    payload.message
                  ) : (
                    <span className="error-msg" style={{ color: "red" }}>
                      Cannot display message.
                    </span>
                  )}
                </p>
                {
                  <div className="d-flex justify-content-between">
                    <small>By: {username ? username : "Guest"}</small>
                    <small>{payload.time}</small>
                  </div>
                }
              </li>
            );
          })}
    </ul>
  );
}
