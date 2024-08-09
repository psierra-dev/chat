import {createPortal} from "react-dom";
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {BiX} from "react-icons/bi";
import {useSelector} from "../../../hooks/useSelector";
import Avatar from "./Avatar";
import ControlPanel from "./ControlPanel";
import InfoUser from "../../user/components/InfoUser";
import {User} from "../../../types/types";
import IconButton from "./IconButton";

const Header = () => {
  const user = useSelector((state) => state.chat.value.currentUser);
  const [menu, setMenu] = useState(false);
  return (
    <header className=" h-12  p-2 md:px-20 xl:px-32 flex items-center justify-between bg-white border-b-[1px] border-neutral-200 dark:bg-slate-950  dark:border-[#020f17]  fixed top-0 left-0 right-0">
      <span className=" text-sm text-neutral-900 dark:text-neutral-50 font-semibold">
        Chat Fast
      </span>

      {user?.username && (
        <Avatar
          username={user?.username as string}
          size="xs"
          className=" hidden lg:flex"
        />
      )}

      <IconButton className="block lg:hidden" onClick={() => setMenu(!menu)}>
        {!menu ? <GiHamburgerMenu /> : <BiX />}
      </IconButton>

      {menu &&
        createPortal(
          <div className="flex lg:hidden justify-end fixed top-12 right-0 left-0 z-50 h-screen bg-[#000000ab]">
            <div className=" flex flex-col gap-3 min-w-[280px] p-2 h-screen bg-white dark:bg-slate-950">
              <InfoUser user={user as User} />
              <ControlPanel />
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;
