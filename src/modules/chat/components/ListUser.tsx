import { User } from "../../../types/types";
import { Link } from "react-router-dom";
import Avatar from "../../common/components/Avatar";
import Status from "../../common/components/Status";

/*const users: User[] = [
  {
    id: "sdsadsf",
    username: "Pablo",
  },
  {
    id: "sdsadsf2",
    username: "Angel",
  },
  {
    id: "sdsadsf3",
    username: "Monica",
  },
  {
    id: "sdsadsf4",
    username: "Paula",
  },
  {
    id: "sdsadsf5",
    username: "Pablo",
  },
  {
    id: "sdsadsf6",
    username: "Angel",
  },
  {
    id: "sdsadsf7",
    username: "Monica",
  },
  {
    id: "sdsadsf8",
    username: "Paula",
  },
  {
    id: "sdsadsf9",
    username: "Paula",
  },
  {
    id: "sdsadsf10",
    username: "Pablo",
  },
  {
    id: "sdsadsf11",
    username: "Angel",
  },
  {
    id: "sdsadsf12",
    username: "Monica",
  },
  {
    id: "sdsadsf13",
    username: "Paula",
  },
  {
    id: "sdsadsf14",
    username: "Pablo",
  },
  {
    id: "sdsadsf15",
    username: "Angel",
  },
  {
    id: "sdsadsf16",
    username: "Monica",
  },
  {
    id: "sdsadsf17",
    username: "Paula",
  },
];*/

const CardUser = ({ user }: { user: User }) => {
  const selected = "Pablo";
  return (
    <div
      className={`flex justify-between items-center ${
        selected === user.username ? "text-blue-700" : "text-neutral-700"
      } hover:bg-neutral-100 hover:cursor-pointer p-2 rounded-lg`}
    >
      <div className="flex items-center">
        <Avatar username={user.username} />
        <p className={`mx-1 md:mx-2 text-xs md:text-sm  font-medium`}>
          {user.username}
        </p>
      </div>

      <Status isOnline />
    </div>
  );
};

const ListUser = ({ users }: { users: User[] }) => {
  console.log(users, "listusers");

  return (
    <div className=" my-2 md:my-4 lg:flex-1 overflow-y-auto">
      <ul className=" flex lg:flex-col gap-1">
        {users?.map((u) => (
          <li key={u.id}>
            <Link to={`/${u.username}`}>
              <CardUser user={u} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
