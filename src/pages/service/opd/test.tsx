import React from "react";

import { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

// no dotenv
const socket = io("http://localhost:5000");
const userName = nanoid(4);

function App() {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, userName });
    socket.emit("chat", { message2, userName });
    setMessage("");
    setMessage2("");
  };

  // useEffect(() => {
  //   socket.on("chat", (payload) => {
  //     setChat([...chat, payload]);
  //   });
  // });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatty app</h1>
        {chat.map((payload, index) => {
          return (
            <p key={index}>
              <span>id: {userName}</span>
              {message}
              {message2}
            </p>
          );
        })}

        <form onSubmit={sendChat}>
          <input
            type="text"
            name="chat"
            placeholder="send text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input
            type="text"
            name="chat"
            placeholder="send text"
            value={message2}
            onChange={(e) => {
              setMessage2(e.target.value);
            }}
          />
          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
