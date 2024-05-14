import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WrapperUsers from "../modules/chat/components/WrapperUsers";
import { User } from "../types/types";
import socket from "../libs/socket";

const PageChat = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    //socket.open();
    socket.on("allusers", (users) => {
      console.log(users, "allusers");
      setAllUsers(users);
    });

    /*return () => {
      socket.off("allusers", (users) => {
        console.log(users, "allusers-return");
        setAllUsers(users);
      });
    };*/
  }, []);
  return (
    <div className=" w-screen h-screen p-4 flex flex-col px-2 md:px-20 lg:px-32">
      <div className=" w-full h-full flex flex-col flex-1 lg:flex-row gap-4">
        <aside className="flex flex-col bg-neutral-100 rounded-2xl">
          <WrapperUsers users={allUsers} />
        </aside>

        <main className="flex flex-col flex-1 bg-neutral-100 rounded-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PageChat;
