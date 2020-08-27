import React from "react";
import { useState, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

export default function SidebarNav() {
  const chatRooms = useContext(ChatContext).chatRooms;
  const getRoom = useContext(ChatContext).handleGetChatRoom;
  const setUrlKey = useContext(ChatContext).setUrlKey;
  console.log(chatRooms);

  const handleClickRoom = (e) => {
    setUrlKey(e.target.attributes.data.value);
    getRoom(e.target.attributes.data.value);
  };

  return (
    <div className="col-md-2">
      <nav className="d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          {Object.entries(chatRooms).map((room) => {
            const key = room[0];
            const payload = room[1];
            console.log(key);

            return (
              <p data={key} key={key} onClick={handleClickRoom}>
                {payload.name}
              </p>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
