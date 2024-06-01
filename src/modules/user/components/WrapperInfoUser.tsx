import InfoUser from "./InfoUser";
import { useSelector } from "../../../hooks/useSelector";

const WrapperInfoUser = () => {
  const userID = useSelector((state) => state.chat.value.selectedUsetInfo);
  console.log(userID, "userID");

  const users = useSelector((state) => state.chat.value.allUsers);

  const user = users.filter((user) => user.id === userID);
  console.log(user);
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center">
      {user.length > 0 && <InfoUser user={user[0]} />}
    </div>
  );
};

export default WrapperInfoUser;
