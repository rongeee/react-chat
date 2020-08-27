import React from "react";
import { useState, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

export default function SidebarNav() {
  const chatRooms = useContext(ChatContext).chatRooms;
  const getRoom = useContext(ChatContext).handleGetChatRoom;
  const setUrlKey = useContext(ChatContext).setUrlKey;
  console.log(chatRooms);

  const updateActiveNavItem = (event) => {
    const thisItem = event.currentTarget;
    // remove active class from currently clicked menu item
    // should only be 1 but for sanity search for all possible
    [].forEach.call(
      document.querySelectorAll("nav.sidebar li.nav-item.active"),
      function (item) {
        item.classList.remove("active");
      }
    );
    // add active class to clicked menu item
    thisItem.classList.add("active");
  };

  const handleClickRoom = (e) => {
    updateActiveNavItem(e);
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
              <ul className="nav flex-column">
                {payload.name && (
                  <li
                    className="nav-item nav-link list-group-item d-flex justify-content-between align-items-center"
                    style={{ cursor: "pointer" }}
                    data={key}
                    key={key}
                    onClick={handleClickRoom}
                  >
                    {payload.name}
                  </li>
                )}
              </ul>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
