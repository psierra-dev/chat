import { useEffect, useRef, useState } from "react";
import socket from "../../../libs/socket";
import { Message } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const ViewMessage = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const [messages, setMessages] = useState<Message[]>([]);
  const boxMessage = useRef<HTMLElement>(null);

  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(msg, "msg");
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    boxMessage.current?.scrollTo(0, boxMessage.current.scrollHeight);
  }, [messages]);

  return (
    <section
      id="boxview"
      ref={boxMessage}
      className="flex flex-col flex-1 overflow-y-auto scroll-smooth"
    >
      <div className="flex flex-col justify-end px-20 flex-1 gap-2">
        {messages?.map((m) => (
          <div
            key={m.id}
            className={`p-2 w-fit max-w-[50%] rounded-xl ${
              user.username === m.from ? "self-end bg-blue-700" : "bg-blue-500"
            }  text-white`}
          >
            <span className=" break-words">{m.msg}</span>
          </div>
        ))}

        {/*<div className="p-2 w-fit rounded-xl bg-blue-100 text-neutral-900">
        Hola como estas?
      </div>
      <div className="p-2 w-fit rounded-xl self-end bg-blue-700 text-white">
        Hola como estas?
    </div>*/}
      </div>
    </section>
  );
};

export default ViewMessage;
