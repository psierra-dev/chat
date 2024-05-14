import { BiMessage } from "react-icons/bi";

const IndexChat = () => {
  return (
    <section className=" flex flex-col justify-center items-center h-full w-full">
      <span className="text-5xl font-semibold text-blue-600">
        <BiMessage />
      </span>
      <h3 className=" text-lg font-semibold text-neutral-700">
        Busca un usuario para empezar a chatear
      </h3>
    </section>
  );
};

export default IndexChat;
