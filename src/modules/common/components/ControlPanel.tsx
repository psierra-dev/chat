import { BiBrightnessHalf, BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ControlPanel = () => {
  const navigate = useNavigate();
  return (
    <section className=" h-40 p-2 hidden lg:flex flex-col justify-center gap-2 text-neutral-900 ">
      <div className=" flex gap-1 p-1 items-center text-base font-medium hover:bg-neutral-200 hover:cursor-pointer rounded-lg">
        <span className=" text-xl ">
          <BiBrightnessHalf />
        </span>
        <span className=" text-base">Cambiar aspecto</span>
      </div>

      <div className=" flex gap-1 p-1 items-center text-base text-red-400 font-medium hover:bg-neutral-200 hover:cursor-pointer rounded-lg">
        <span className=" text-xl font-medium">
          <BiLogOut />
        </span>
        <button
          className=" text-base font-medium"
          onClick={() => {
            navigate("/");
          }}
        >
          Cerrar sesion
        </button>
      </div>
    </section>
  );
};

export default ControlPanel;
