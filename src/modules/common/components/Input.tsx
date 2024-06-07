import React from "react";

import { iconsInput } from "../../../consts/icons";

interface Props {
  name: string;
  placeholder?: string;
  label_text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: "user" | "search";
}

const Input = ({ name, label_text, placeholder, onChange, icon }: Props) => {
  const IconComponent = iconsInput[icon];

  return (
    <div className=" flex flex-col text-neutral-900 dark:text-neutral-50">
      <label className=" text-sm  ">{label_text}</label>
      <div className="flex items-center p-2 mt-2 border-[1px] border-neutral-300 dark:border-neutral-900  rounded-md bg-neutral-100 dark:bg-slate-700">
        <span className="text-neutral-800 dark:text-white">
          {IconComponent}
        </span>

        <input
          type="text"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full ml-1 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent  border-none active:border-none focus:border-none focus-visible:border-none focus-visible:outline-none text-neutral-800 dark:text-white text-base placeholder:text-sm md:placeholder:text-base"
        />
      </div>
    </div>
  );
};

export default Input;
