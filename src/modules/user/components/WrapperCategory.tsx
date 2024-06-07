import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { BiFilter } from "react-icons/bi";

import { useSelector } from "../../../hooks/useSelector";
import { updateInterests } from "../../../store/slices/chatSlice";
import Chip from "../../common/components/Chip";

import INTERESTS from "../../../consts/interests.json";

const WrapperCategory = () => {
  const current_user = useSelector((state) => state.chat.value.currentUser);
  const user_interests = current_user?.interests;
  const [interests, setInterests] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user_interests) {
      setInterests(user_interests);
    }
  }, [user_interests]);

  function compareArray(array1: string[], array2: string[]) {
    if (array1?.length !== array2?.length) {
      return false;
    }
    const equal = array1?.filter((u) => array2.includes(u));

    return equal?.length === array2?.length;
  }
  const isEqual =
    user_interests && interests
      ? compareArray(interests, user_interests as string[])
      : false;

  const handeleupdateInterests = () => {
    dispatch(updateInterests(interests));
  };

  return (
    <div className="flex flex-col w-full">
      <div className=" mb-2">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
          Intereses
        </h3>
      </div>
      <div className=" w-full relative flex items-center gap-2">
        <span className="absolute top-[-15px] right-0 text-xs text-neutral-600 dark:text-neutral-100">
          Min3/Max5
        </span>
        <div className="w-full h-12 flex gap-1 px-2 items-center shadow-inner rounded-md">
          {interests?.map((interest) => (
            <Chip key={interest} text={interest} isActive />
          ))}
        </div>
        <button
          disabled={isEqual}
          className=" w-fit h-fit p-1 rounded-md disabled:bg-blue-300  bg-blue-500 text-white text-lg font-semibold"
          onClick={handeleupdateInterests}
        >
          <BiFilter />
        </button>
      </div>
      <div className="flex lg:flex-wrap gap-2 overflow-auto p-2  relative">
        {INTERESTS?.map((inte) => (
          <div
            key={inte}
            className=" w-fit h-fit relative cursor-pointer"
            onClick={() => {
              if (interests?.includes(inte)) {
                if (interests.length > 3) {
                  const neInterests = interests.filter((i) => i !== inte);
                  setInterests(neInterests);
                }
              } else {
                if (interests.length < 5) {
                  setInterests([...(interests as string[]), inte]);
                }
              }
            }}
          >
            {/* <div className=" absolute flex justify-center items-center text-white font-medium right-[-9px] top-[-5px] z-50 w-4 h-4 bg-blue-400 rounded-full">
              1
            </div> */}
            <Chip text={inte} isActive={interests?.includes(inte)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrapperCategory;
