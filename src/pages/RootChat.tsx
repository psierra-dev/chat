import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import socket from "../libs/socket";

import {
  addMessageToUser,
  addUser,
  deleteUser,
  setCurrentUser,
  setUsers,
  updateUser,
} from "../store/slices/chatSlice";

import Header from "../modules/common/components/Header";
import { User } from "../types/types";
import { addMessage } from "../utils/sessionStorageMessage";

const RootChat = () => {
  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    socket.on("message:private", (message) => {
      let newMessage = message;
      const sender = message.sender as User;
      if (sender && sender.username === username) {
        newMessage = { ...newMessage, read: true };
      }
      addMessage(newMessage, sender.username, sender.userId);
      dispatch(addMessageToUser(newMessage));
    });

    return () => {
      socket.off("message:private");
    };
  }, [dispatch, username]);

  useEffect(() => {
    socket.on("user:current", (user) => {
      console.log(user, "---user:current");
      dispatch(setCurrentUser(user));
    });

    socket.on("user:update", (user) => {
      console.log(user, "---user:update");
      dispatch(updateUser(user));
    });

    socket.on("user:all", (users) => {
      console.log("user:all", users);
      dispatch(setUsers(users));
    });

    socket.on("user:connected", (user) => {
      console.log("user:connected", user);
      dispatch(addUser(user));
    });

    socket.on("user:disconnected", (userId) => {
      console.log("user:disconnected", userId);
      dispatch(deleteUser(userId));
    });

    return () => {
      socket.off("user:current");
      socket.off("user:all");
      socket.off("user:connected");
      socket.off("user:disconnected");
      socket.off("message:private");
    };
  }, [dispatch]);

  return (
    <div className=" w-screen bg-white dark:bg-slate-950 h-screen p-4 flex flex-col px-2 md:px-20 lg:px-32">
      <Header />

      <Outlet />
    </div>
  );
};

export default RootChat;
