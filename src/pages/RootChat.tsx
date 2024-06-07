import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
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
import { useSelector } from "../hooks/useSelector";
import { BiLoader } from "react-icons/bi";

const RootChat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.chat.value.currentUser);

  useEffect(() => {
    if (!user) {
      setLoading(true);
      const currentUser = sessionStorage.getItem("currentUser");

      if (currentUser) {
        socket.auth = JSON.parse(currentUser);
        socket.connect();
      } else if (socket.connected) {
        setLoading(true);
      } else {
        navigate("/", { replace: true });
      }

      socket.on("user:session", (data) => {
        dispatch(setCurrentUser(data));
        setLoading(false);
        sessionStorage.setItem("currentUser", JSON.stringify(data));
      });
    } else {
      setLoading(false);
    }
  }, [dispatch, user, navigate]);

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
    socket.on("user:update", (user) => {
      dispatch(updateUser(user));
    });

    socket.on("user:all", (users) => {
      dispatch(setUsers(users));
    });

    socket.on("user:connected", (user) => {
      dispatch(addUser(user));
    });

    socket.on("user:disconnected", (userId) => {
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
      <>
        <Header />

        <Outlet />
      </>
      {loading && (
        <div className="fixed flex justify-center items-center bg-transparent top-0 bottom-0 right-0 left-0">
          <span className=" text-4xl text-white w-fit h-fit  animate-spin">
            <BiLoader />
          </span>
        </div>
      )}
    </div>
  );
};

export default RootChat;
