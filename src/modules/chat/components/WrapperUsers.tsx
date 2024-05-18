import { Link } from "react-router-dom";

import { User } from "../../../types/types";
import ListUser from "./ListUser";

const WrapperUsers = ({ users }: { users: User[] }) => {
  return (
    <>
      <Link
        to={"/users"}
        className=" p-2 rounded-md bg-blue-600 text-center text-white font-semibold text-sm md:text-base"
      >
        Buscar otros usuarios
      </Link>
      <ListUser users={users} />
    </>
  );
};

export default WrapperUsers;
