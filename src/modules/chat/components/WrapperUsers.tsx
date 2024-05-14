import React, { useEffect, useState } from "react";
import SearchUser from "./SearchUser";
import ListUser from "./ListUser";
import { BiBrightnessHalf, BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import socket from "../../../libs/socket";
import { User } from "../../../types/types";
const USERS: User[] = [
  {
    id: "sdsadsf",
    username: "Pablo",
  },
  {
    id: "sdsadsf2",
    username: "Angel",
  },
  {
    id: "sdsadsf3",
    username: "Monica",
  },
  {
    id: "sdsadsf4",
    username: "Paula",
  },
  {
    id: "sdsadsf5",
    username: "Pablo",
  },
  {
    id: "sdsadsf6",
    username: "Angel",
  },
  {
    id: "sdsadsf7",
    username: "Monica",
  },
  {
    id: "sdsadsf8",
    username: "Paula",
  },
  {
    id: "sdsadsf9",
    username: "Paula",
  },
  {
    id: "sdsadsf10",
    username: "Pablo",
  },
  {
    id: "sdsadsf11",
    username: "Angel",
  },
  {
    id: "sdsadsf12",
    username: "Monica",
  },
  {
    id: "sdsadsf13",
    username: "Paula",
  },
  {
    id: "sdsadsf14",
    username: "Pablo",
  },
  {
    id: "sdsadsf15",
    username: "Angel",
  },
  {
    id: "sdsadsf16",
    username: "Monica",
  },
  {
    id: "sdsadsf17",
    username: "Paula",
  },
];

const WrapperUsers = ({ users }: { users: User[] }) => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState<User[]>([]);

  console.log(users);
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
    <div className=" p-3 md:p-4 flex flex-col flex-1 min-w-[350px] overflow-auto">
      <SearchUser />
      <ListUser users={USERS} />
      <section className=" h-40 p-2 hidden lg:flex flex-col justify-center gap-2 text-neutral-900 ">
        <div className=" flex gap-1 p-1 items-center text-base font-medium hover:bg-neutral-200 hover:cursor-pointer rounded-lg">
          <span className=" text-xl ">
            <BiBrightnessHalf />
          </span>
          <span className=" text-base">Cambiar aspecto</span>
        </div>

        <div className=" flex gap-1 p-1 items-center text-base text-red-400 font-medium hover:bg-neutral-200 hover:cursor-pointer rounded-lg">
          <span className=" text-xl font-medium">
            <BiLogOut />
          </span>
          <button
            className=" text-base font-medium"
            onClick={() => {
              navigate("/");
            }}
          >
            Cerrar sesion
          </button>
        </div>
      </section>
    </div>
  );
};

export default WrapperUsers;
