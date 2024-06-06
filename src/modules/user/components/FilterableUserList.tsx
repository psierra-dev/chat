import { useSelector } from "../../../hooks/useSelector";
import { User } from "../../../types/types";
import Input from "../../common/components/Input";
import ListUser from "./ListUser";

const FilterableUserList = () => {
  const users = useSelector((state) => state.chat.value.allUsers);
  const currentUser = useSelector(
    (state) => state.chat.value.currentUser
  ) as User;

  const filteredUser = currentUser
    ? users?.filter((u) => {
        for (const interest of currentUser.interests) {
          if (u.interests?.includes(interest)) {
            return true;
          }
        }
      })
    : [];

  return (
    <section className=" flex flex-col p-2 md:p-4 flex-1 overflow-auto">
      <Input name="" icon="search" label_text="" onChange={() => null} />

      <ListUser users={filteredUser as User[]} />
    </section>
  );
};

export default FilterableUserList;
