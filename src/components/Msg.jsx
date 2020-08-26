import React from 'react'
import { ChatContext } from 'react';

export default function Msg(payload, key) {

    return (
      
        <li className="list-group-item" key={key}>
          <p>
            {payload}
          </p>
          {payload.username && <small>By: {payload.username} {payload.time}</small>}
        </li>
      
    )
}
