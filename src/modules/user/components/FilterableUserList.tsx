import { User } from "../../../types/types";
import Input from "../../common/components/Input";
import ListUser from "./ListUser";

const FilterableUserList = ({ users }: { users: User[] }) => {
  return (
    <section className=" flex flex-col p-2 md:p-4 flex-1 overflow-auto">
      <Input name="" icon="search" label_text="" onChange={() => null} />

      <ListUser users={users} />
    </section>
  );
};

export default FilterableUserList;
