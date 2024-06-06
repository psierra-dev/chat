import { useRef, useState } from "react";
import { BiHappy, BiSend } from "react-icons/bi";

import EmojiPicker from "../../common/components/EmojiPicker";
import ClickOutsideComponent from "../../common/components/ClickOutsideComponent";

const InputMessage = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");
  const [emojiShow, setEmojiShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    onSendMessage(message);
    setMessage("");
  };

  const insertEmoji = (emoji: string) => {
    if (inputRef.current) {
      const { selectionStart, selectionEnd } = inputRef.current;
      if (selectionStart !== null && selectionEnd !== null) {
        const newMessage =
          message.slice(0, selectionStart) +
          emoji +
          message.slice(selectionEnd);
        setMessage(newMessage);

        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.selectionStart = selectionStart + emoji.length;
            inputRef.current.selectionEnd = selectionStart + emoji.length;
          }
        }, 0);
        inputRef?.current?.focus();
      }
    }
  };
  return (
    <div className=" p-3 md:p-5 w-full ">
      <div className="flex gap-3 p-3 justify-between items-center w-full rounded-xl shadow-md bg-blue-50 dark:bg-slate-800">
        <div className="flex items-center relative">
          <button
            ref={buttonRef}
            onClick={() => {
              setEmojiShow(!emojiShow);
              inputRef?.current?.focus();
            }}
            className="dark:text-neutral-50 text-lg  md:text-xl hover:text-yellow-700 w-fit h-fit"
          >
            <BiHappy />
          </button>
          {emojiShow && (
            <ClickOutsideComponent
              onClose={(event) => {
                if (
                  buttonRef.current &&
                  !buttonRef.current.contains(event?.target as Node)
                ) {
                  console.log("entrea");
                  setEmojiShow(false);
                }
              }}
            >
              <div className=" absolute bottom-12">
                <EmojiPicker onSelect={insertEmoji} />
              </div>
            </ClickOutsideComponent>
          )}
        </div>
        <form onSubmit={handleSubmit} className=" flex w-full gap-1 md:gap-2">
          <input
            type="text"
            autoFocus
            placeholder="Enviar mensaje..."
            value={message}
            ref={inputRef}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full ml-1 border-none active:border-none focus:border-none focus-visible:border-none focus-visible:outline-none text-base font-normal text-neutral-800 dark:text-neutral-50 bg-transparent bg-red-600"
          />
          <button
            disabled={message.length === 0}
            type="submit"
            className="flex justify-center items-center bg-blue-500  hover:bg-blue-600 disabled:bg-blue-400 w-8 h-8 md:w-10 md:h-10 rounded-full text-center p-2 text-white text-base  md:text-xl font-semibold"
          >
            <BiSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputMessage;
