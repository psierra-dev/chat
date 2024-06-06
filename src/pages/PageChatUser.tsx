import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import socket from "../libs/socket";
import { useSelector } from "../hooks/useSelector";

import { Message, User } from "../types/types";

import HeaderMessage from "../modules/chat/components/HeaderMessage";
import InputMessage from "../modules/chat/components/InputMessage";
import ViewMessage from "../modules/chat/components/ViewMessage";
import { addMessageToUser, readMessages } from "../store/slices/chatSlice";
import { addMessage } from "../utils/sessionStorageMessage";

const PageChatUser = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.chat.value.chatUsers);
  const userSelectedChat = useSelector(
    (state) => state.chat.value.selectedUsetChat
  );
  const user = users.filter((u) => u.userId === userSelectedChat);
  const messages = user && user[0]?.messages;
  const navigate = useNavigate();

  useEffect(() => {
    if (user.length === 0) {
      navigate("/chat");
    }
  }, [navigate, user]);

  useEffect(() => {
    dispatch(readMessages(username));
  }, [dispatch, username]);

  const onSendMessage = (message: string) => {
    const newMessage: Message = {
      sender: "my",
      message,
      toId: user[0]?.userId,
      self: true,
      read: true,
    };
    dispatch(addMessageToUser(newMessage));
    addMessage(newMessage, username as string, user[0]?.userId);
    socket.emit("message:private", { ...newMessage, read: false });
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
