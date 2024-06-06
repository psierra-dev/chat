import { useRef, useState } from "react";
import { BiBrightnessHalf, BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import socket from "../../../libs/socket";
import ClickOutsideComponent from "./ClickOutsideComponent";
import MenuTheme from "./MenuTheme";

const ControlPanel = () => {
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showThemeChange, setShowThemeChange] = useState(false);

  return (
    <section className=" h-40 p-2 lg:flex flex-col justify-center gap-2 text-neutral-900 dark:text-neutral-50">
      <div className="relative">
        <button
          ref={buttonRef}
          className=" flex gap-1 p-1 items-center text-base font-medium hover:bg-neutral-200 dark:hover:bg-slate-900 hover:cursor-pointer rounded-lg w-full"
          onClick={() => setShowThemeChange(!showThemeChange)}
        >
          <span className=" text-xl ">
            <BiBrightnessHalf />
          </span>
          <span className=" text-base">Cambiar aspecto</span>
        </button>

        {showThemeChange && (
          <ClickOutsideComponent
            onClose={(event) => {
              if (
                buttonRef.current &&
                !buttonRef.current.contains(event?.target as Node)
              ) {
                setShowThemeChange(false);
              }
            }}
          >
            <MenuTheme />
          </ClickOutsideComponent>
        )}
      </div>

      <button
        className=" flex gap-1 p-1 items-center text-base text-red-400 font-medium hover:bg-neutral-200  dark:hover:bg-slate-900 hover:cursor-pointer rounded-lg"
        onClick={() => {
          sessionStorage.removeItem("currentUser");
          socket.disconnect();
          navigate("/");
        }}
      >
        <span className=" text-xl font-medium">
          <BiLogOut />
        </span>
        <button className=" text-base font-medium">Cerrar sesion</button>
      </button>
    </section>
  );
};

export default ControlPanel;
