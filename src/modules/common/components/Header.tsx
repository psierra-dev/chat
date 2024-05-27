import { useSelector } from "../../../hooks/useSelector";
import Avatar from "./Avatar";

const Header = () => {
  const user = useSelector((state) => state.user.value.currentUser);

  return (
    <header className=" p-2 md:px-32 flex items-center justify-between bg-blue-600 fixed top-0 left-0 right-0">
      <h1 className=" text-sm text-white font-semibold">Chat Fast</h1>

      {user?.username && (
        <Avatar username={user?.username as string} size="xs" />
      )}
    </header>
  );
};

export default Header;
