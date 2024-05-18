import { useParams } from "react-router-dom";

import HeaderMessage from "../modules/chat/components/HeaderMessage";
import InputMessage from "../modules/chat/components/InputMessage";
import ViewMessage from "../modules/chat/components/ViewMessage";

const user = {
  id: 1,
  username: "usuario1",
  interests: ["Leer", "Fútbol", "Cine"],
  like: 45,
  dislike: 10,
  biography:
    "Apasionado de la lectura y el fútbol, disfruta de las buenas películas los fines de semana.",
};
const PageChatUser = () => {
  const { userId } = useParams();

  console.log(userId, "usersId");
  return (
    <div className="flex flex-col flex-1 rounded-md bg-neutral-100 overflow-auto">
      <HeaderMessage user={user} />
      <ViewMessage />
      <InputMessage />
    </div>
  );
};

export default PageChatUser;
