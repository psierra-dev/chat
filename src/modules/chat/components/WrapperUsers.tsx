import { Link } from "react-router-dom";

import ListUser from "./ListUser";

const WrapperUsers = () => {
  return (
    <>
      <Link
        to={"/chat/users"}
        className=" p-2 rounded-md bg-blue-600 text-center text-white font-semibold text-sm md:text-base"
      >
        Buscar otros usuarios
      </Link>
      <ListUser />
    </>
  );
};

export default WrapperUsers;
