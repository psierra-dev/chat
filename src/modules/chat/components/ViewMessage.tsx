import { useEffect, useRef } from "react";
import { Message } from "../../../types/types";

const ViewMessage = ({ messages }: { messages: Message[] }) => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    boxRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section
      id="boxview"
      className="flex flex-col flex-1 overflow-y-auto scroll-smooth"
    >
      <div className="flex flex-col justify-end px-2 md:px-20 flex-1 gap-1 md:gap-2">
        {messages?.map((m, i) => (
          <div
            key={i}
            className={`p-2 w-fit max-w-[50%] rounded-xl ${
              m.self ? "self-end bg-blue-700" : "bg-blue-500"
            }  text-white`}
          >
            <span className=" break-words">{m.message}</span>
          </div>
        ))}
        <div ref={boxRef} />
      </div>
    </section>
  );
};

export default ViewMessage;
