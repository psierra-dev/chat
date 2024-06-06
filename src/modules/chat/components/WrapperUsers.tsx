import { Link } from "react-router-dom";

import ListUser from "./ListUser";
import { FiUserPlus } from "react-icons/fi";

const WrapperUsers = () => {
  return (
    <>
      <header className=" flex items-center justify-between w-full">
        <p className="text-neutral-900 dark:text-neutral-50 text-sm font-semibold ">
          Tu chat
        </p>
        <Link
          to={"/chat/users"}
          className=" flex justify-center items-center  p-2 w-fit h-fit rounded-full bg-blue-600 text-center text-white font-semibold text-md md:text-base"
        >
          <FiUserPlus />
        </Link>
      </header>
      <ListUser />
    </>
  );
};

export default WrapperUsers;
