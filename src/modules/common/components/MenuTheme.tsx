import { MdComputer, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import useTheme from "../../../hooks/useTheme";

const IconTheme = {
  Dark: <MdDarkMode />,
  Light: <MdOutlineLightMode />,
  System: <MdComputer />,
};

const CardMenuTheme = ({
  isActive,
  onSelect,
  type,
}: {
  isActive: boolean;
  onSelect: () => void;
  type: "Dark" | "Light" | "System";
}) => {
  const Icon = IconTheme[type];
  return (
    <div
      className={`w-full p-1 flex items-center gap-2 ${
        isActive
          ? "text-blue-600 dark:text-blue-400 "
          : "text-neutral-900 dark:text-neutral-100"
      } dark:hover:bg-slate-800 font-semibold cursor-pointer`}
      onClick={onSelect}
    >
      <span>{Icon}</span>
      <span>{type}</span>
    </div>
  );
};
const MenuTheme = () => {
  const { theme, changeTheme } = useTheme();
  return (
    <div className=" w-[140px] bg-white dark:bg-slate-900 dark:text-white absolute left-0 lg:left-auto lg:right-0 top-10 lg:top-auto lg:bottom-10 py-2 shadow-md rounded-md z-20">
      <CardMenuTheme
        type="Light"
        isActive={theme === "light"}
        onSelect={() => changeTheme("light")}
      />
      <CardMenuTheme
        type="Dark"
        isActive={theme === "dark"}
        onSelect={() => changeTheme("dark")}
      />
      <CardMenuTheme
        type="System"
        isActive={theme === "system"}
        onSelect={() => changeTheme("system")}
      />
    </div>
  );
};

export default MenuTheme;
