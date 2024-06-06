import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import socket from "../libs/socket";

const Root = () => {
  useEffect(() => {
    const currentUser = sessionStorage.getItem("currentUser");
    console.log(currentUser);

    if (currentUser) {
      console.log(currentUser, "currentUser");
      socket.auth = JSON.parse(currentUser);
      socket.connect();
    }

    socket.on("user:session", (data) => {
      console.log(data);

      sessionStorage.setItem("currentUser", JSON.stringify(data));
    });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Root;
