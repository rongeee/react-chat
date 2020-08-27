import React from "react";
import { useState, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import SidebarNav from "./SidebarNav";
import ChatRoom from "./ChatRoom";
import FadeIn from "react-fade-in";

export default function LayoutSimple({ children }) {
  return (
    <div className="row">
      <SidebarNav />
      <div className="col-md-10">
        <div>
          <main role="main" className="col-lg-10 pt-3 px-4">
            <FadeIn delay={300} transitionDuration={500}>
              <ChatRoom />
            </FadeIn>
          </main>
        </div>
      </div>
    </div>
  );
}
