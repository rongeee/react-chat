import React from "react";
import FadeIn from "react-fade-in";

export default function Msg({ username, msg, time }) {
  return (
    <FadeIn delay={100} transitionDuration={300}>
      <li className="list-group-item">
        <p>
          {typeof msg === "string" ? (
            msg
          ) : (
            <span className="error-msg" style={{ color: "red" }}>
              Cannot display message.
            </span>
          )}
        </p>
        {
          <div className="d-flex justify-content-between">
            <small>By: {username ? username : "Guest"}</small>
            <small>{time}</small>
          </div>
        }
      </li>
    </FadeIn>
  );
}
