import React from "react";
import { User } from "../../../types/types";
import Avatar from "../../common/components/Avatar";
import Status from "../../common/components/Status";
import { BiDotsVertical } from "react-icons/bi";

const HeaderMessage = ({ user }: { user: User }) => {
  return (
    <header className="flex justify-between rounded-t-xl items-center w-full p-3 bg-blue-500">
      <div className="flex items-center">
        <Avatar username={user.username} />
        <p className="mx-2 text-sm text-neutral-100 font-medium">
          {user.username}
        </p>

        <Status isOnline={false} />
      </div>

      <button className="text-white text-xl w-fit p-1 rounded-full hover:bg-neutral-600 hover:bg-opacity-30">
        <BiDotsVertical />
      </button>
    </header>
  );
};

export default HeaderMessage;
