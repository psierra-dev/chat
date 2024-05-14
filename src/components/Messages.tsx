import React, { useEffect, useState } from "react";
import socket from "../libs/socket";
import { Message } from "../types/types";

const Messages = () => {
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState<Message[]>([]);

  const onSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    setListMessage([
      ...listMessage,
      { username: "yp", msg: message, from: "", to: "" },
    ]);
    socket.emit("chat message", message);
    setMessage("");
  };

  useEffect(() => {
    console.log("aquiii");
    socket.on("chat message", (msg: Message) => {
      console.log(msg, "msg");
      setListMessage([...listMessage, msg]);
    });
    return () => {
      socket.off("chat message");
    };
  }, [listMessage]);

  return (
    <section>
      <ul>
        {listMessage.map((m) => (
          <li key={`${m.msg}${m.username}`}>
            {m.username} {m.msg}
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmitMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Messages;
