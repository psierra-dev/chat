import { BiHappy, BiSend } from "react-icons/bi";

import EmojiPicker from "../../common/components/EmojiPicker";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../../../libs/socket";
const InputMessage = () => {
  const [message, setMessage] = useState("");
  const [emojiShow, setEmojiShow] = useState(false);
  const { userId } = useParams();
  const inputRef = useRef<HTMLInputElement>(null);

  //console.log(userId, "userId-inputmsg");

  const onSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    //const { username } = socket.auth as { username: string };
    const data = {
      from: "",
      to: userId ?? "",
      msg: message,
    };

    // console.log(data, "data");
    socket.emit("message", data);
    setMessage("");
  };
  return (
    <div className=" p-3 md:p-5 w-full ">
      <div className="flex gap-3 p-3 justify-between items-center w-full rounded-xl shadow-md bg-blue-50">
        <div className="flex items-center relative">
          <button
            onClick={() => setEmojiShow(!emojiShow)}
            className=" text-lg  md:text-xl hover:text-yellow-950 w-fit h-fit"
          >
            <BiHappy />
          </button>
          {emojiShow && (
            <div className=" absolute bottom-12">
              <EmojiPicker
                onSelect={(icon) => {
                  setMessage((p) => p + icon);
                  inputRef.current?.focus();
                  inputRef.current?.autofocus;
                }}
              />
            </div>
          )}
        </div>
        <form onSubmit={onSendMessage} className=" flex w-full gap-1 md:gap-2">
          <input
            type="text"
            autoFocus
            placeholder="Enviar mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full ml-1 border-none active:border-none focus:border-none focus-visible:border-none focus-visible:outline-none text-base font-normal text-neutral-800 bg-transparent bg-red-600"
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-blue-500  hover:bg-blue-600 w-8 h-8 md:w-10 md:h-10 rounded-full text-center p-2 text-white text-base  md:text-xl font-semibold"
          >
            <BiSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputMessage;
