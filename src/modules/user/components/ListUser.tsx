import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiEnvelope, BiUserPin, BiUserPlus } from "react-icons/bi";
import { useSelector } from "../../../hooks/useSelector";
import { User } from "../../../types/types";
import Avatar from "../../common/components/Avatar";
import Chip from "../../common/components/Chip";
import Status from "../../common/components/Status";
import {
  addUserToChat,
  setUserChat,
  setUserInfo,
} from "../../../store/slices/chatSlice";

const ItemUser = ({ user }: { user: User }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.chat.value.selectedUsetInfo);
  const navigate = useNavigate();

  const handleSelectUser = () => {
    dispatch(setUserInfo(user.id));
  };

  const handleSelectChatUser = () => {
    dispatch(addUserToChat(user));
    dispatch(setUserChat(user.userId));
    navigate(`/chat/${user.username}`);
  };
  return (
    <div className={`flex flex-col bg-yellow-20 p-1 md:p-2 rounded-lg`}>
      <div className="w-full flex justify-between items-center mb-1 md:mb-2">
        <div className="flex items-center">
          <Avatar username={user.username} />
          <p
            className={`mx-1 md:mx-2 text-blue-500 dark:text-blue-400 text-xs md:text-sm  font-medium`}
          >
            {user.username}
          </p>
          <Status isOnline />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSelectChatUser}
            className="text-blue-500 text-lg hover:scale-125 font-semibold w-fit h-fit"
          >
            <BiEnvelope />
          </button>
          <button className="text-neutral-900 dark:text-neutral-50 text-lg hover:scale-125 font-semibold w-fit h-fit">
            <BiUserPlus />
          </button>
          <button
            onClick={handleSelectUser}
            className={`${
              userId === user.id
                ? "text-green-900"
                : "text-neutral-900 dark:text-neutral-50"
            }  text-lg hover:scale-125 font-semibold w-fit h-fit`}
          >
            <BiUserPin />
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        {user?.interests?.map((interest) => (
          <Chip text={interest} key={interest} />
        ))}
      </div>
    </div>
  );
};

const ListUser = ({ users }: { users: User[] }) => {
  return (
    <div className=" my-2 md:my-4 flex flex-col flex-1 overflow-y-auto">
      <ul className="w-full flex  flex-col gap-1 md:gap-2">
        {users?.map((u) => (
          <li key={u.id}>
            <ItemUser user={u} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
