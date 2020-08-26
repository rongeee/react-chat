import React from "react";
import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

export default function Messages() {

  const messages = useContext(ChatContext).chatRoom.messages;

  return (
    <ul className="list-group">
        {
        messages && Object.entries(messages).reverse().map(item => {
            const key = item[0]
            const payload = item[1]
 
            return (
                <li className="list-group-item" key={key}>
                    <p>
                        {payload.message} {payload.messages}
                    </p>
                    {payload.username && <small>By: {payload.username} {payload.time}</small>}
                </li>
            )
        })
        }
    </ul>
)
}
