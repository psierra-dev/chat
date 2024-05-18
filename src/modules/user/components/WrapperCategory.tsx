import { BiFilter } from "react-icons/bi";

import ListCategory from "./ListCategory";
import Chip from "../../common/components/Chip";

const WrapperCategory = ({ interests }: { interests: string[] }) => {
  return (
    <div className="flex flex-col w-full">
      <div className=" mb-2">
        <h3 className="text-base font-semibold text-neutral-900">Categoria</h3>
      </div>
      <div className=" w-full flex items-center gap-2">
        <div className="w-full h-12 flex gap-1 px-2 items-center shadow-inner rounded-md">
          {interests?.map((interest) => (
            <Chip key={interest} text={interest} isActive />
          ))}
        </div>
        <button
          disabled
          className=" w-fit h-fit p-1 rounded-md disabled:bg-blue-300  bg-blue-500 text-white text-lg font-semibold"
        >
          <BiFilter />
        </button>
      </div>
      <ListCategory />
    </div>
  );
};

export default WrapperCategory;
