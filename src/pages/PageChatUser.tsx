import React from "react";
import { useParams } from "react-router-dom";

import HeaderMessage from "../modules/chat/components/HeaderMessage";
import InputMessage from "../modules/chat/components/InputMessage";
import ViewMessage from "../modules/chat/components/ViewMessage";

const user = {
  id: "sdsadsf17",
  username: "Pablo",
};
const PageChatUser = () => {
  const { userId } = useParams();

  console.log(userId, "usersId");
  return (
    <div className="flex flex-col flex-1 bg-neutral-100 overflow-auto">
      <HeaderMessage user={user} />
      <ViewMessage />
      <InputMessage />
    </div>
  );
};

export default PageChatUser;
