import React from "react";

export default function Messages({ payload }) {
  console.log(payload);
  return (
    <ul>
      <li>{payload.message}</li>
    </ul>
  );
}
