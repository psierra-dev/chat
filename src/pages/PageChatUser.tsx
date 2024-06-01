import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import socket from "../libs/socket";
import { useSelector } from "../hooks/useSelector";

import { Message, User } from "../types/types";

import HeaderMessage from "../modules/chat/components/HeaderMessage";
import InputMessage from "../modules/chat/components/InputMessage";
import ViewMessage from "../modules/chat/components/ViewMessage";
import { addMessageToUser } from "../store/slices/chatSlice";

const PageChatUser = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.chat.value.chatUsers);
  const user = users.filter((u) => u.username === username);
  const messages = user[0].messages;

  const onSendMessage = (message: string) => {
    const newMessge: Message = {
      sender: "my",
      message,
      toId: user[0]?.id,
      self: true,
    };
    dispatch(addMessageToUser(newMessge));
    socket.emit("message:private", newMessge);
  };

  return (
    <div className="flex flex-col flex-1 rounded-md  overflow-auto">
      <HeaderMessage user={user[0] as User} />
      <ViewMessage messages={messages} />
      <InputMessage onSendMessage={onSendMessage} />
    </div>
  );
};

export default PageChatUser;
