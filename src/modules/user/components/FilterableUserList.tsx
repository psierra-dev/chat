import { useState } from "react";
import { useSelector } from "../../../hooks/useSelector";
import { User } from "../../../types/types";
import Input from "../../common/components/Input";
import ListUser from "./ListUser";
import { BiUserX } from "react-icons/bi";

const FilterableUserList = () => {
  const users = useSelector((state) => state.chat.value.allUsers);
  const currentUser = useSelector(
    (state) => state.chat.value.currentUser
  ) as User;
  const [search, setSearch] = useState("");

  const filteredUser = currentUser
    ? users?.filter((u) => {
        for (const interest of currentUser.interests) {
          if (u.interests?.includes(interest)) {
            return true;
          }
        }
      })
    : [];

  const searchedUser =
    search.length > 0 && filteredUser.length > 0
      ? filteredUser.filter((user) =>
          user.username.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : filteredUser;

  return (
    <section className=" flex flex-col p-2 md:p-4 flex-1 overflow-auto">
      <Input
        name=""
        placeholder="Buscar usuario..."
        icon="search"
        label_text=""
        onChange={(e) => setSearch(e.target.value)}
      />

      {searchedUser.length > 0 ? (
        <ListUser users={searchedUser as User[]} />
      ) : (
        <div className=" flex flex-col gap-2 w-full h-full justify-center items-center text-neutral-600 dark:text-slate-600 text-2xl font-semibold">
          <BiUserX />
          <span className=" text-sm">No hay usuarios coincidentes</span>
        </div>
      )}
    </section>
  );
};

export default FilterableUserList;
