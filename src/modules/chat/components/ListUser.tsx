import { User } from "../../../types/types";
import { NavLink } from "react-router-dom";
import Avatar from "../../common/components/Avatar";
import Status from "../../common/components/Status";
import { useSelector } from "../../../hooks/useSelector";

const CardUser = ({ user, isActive }: { user: User; isActive: boolean }) => {
  return (
    <div
      className={`m-1 flex justify-between items-center relative ${
        isActive ? "text-blue-700 bg-neutral-200" : "text-neutral-700"
      }  hover:cursor-pointer p-2 rounded-lg`}
    >
      <div className="flex items-center">
        <Avatar username={user.username} />
        <p className={`mx-1 md:mx-2 text-xs md:text-sm  font-medium`}>
          {user.username}
        </p>
        <Status isOnline={user?.online as boolean} />
      </div>

      <div className=" w-4 h-4 flex justify-center items-center  rounded-full bg-blue-600 text-white text-xs z-50 ">
        <span>1</span>
      </div>
    </div>
  );
};

const ListUser = () => {
  const users = useSelector((state) => state.chat.value.chatUsers);
  console.log(users, "chatUsers");
  return (
    <div className=" my-2 md:my-4 lg:flex-1 overflow-y-auto">
      <ul className=" flex lg:flex-col gap-1">
        {users?.map((u) => (
          <li key={u.id} className="">
            <NavLink to={`/chat/${u.username}`}>
              {({ isActive }) => <CardUser user={u} isActive={isActive} />}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
