import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import socket from "../libs/socket";
import { setCurrentUser } from "../store/slices/userSlice";
import { addUser, setUsers } from "../store/slices/listUserSlice";
import Header from "../modules/common/components/Header";
import { addMessage } from "../store/slices/chatSlice";

const RootChat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("myuser", (user) => {
      console.log(user, "---myuser");
      dispatch(setCurrentUser(user));
    });

    socket.on("user:all", (users) => {
      dispatch(setUsers(users));
    });

    socket.on("user:connected", (user) => {
      dispatch(addUser(user));
    });

    socket.on("message:private", (message) => {
      dispatch(addMessage(message));
    });
    return () => {
      socket.off("myuser");
      socket.off("user:all");
      socket.off("user:connected");
      socket.off("message:private");
    };
  }, [dispatch]);

  return (
    <div className=" w-screen h-screen p-4 flex flex-col px-2 md:px-20 lg:px-32">
      <Header />

      <Outlet />
    </div>
  );
};

export default RootChat;
