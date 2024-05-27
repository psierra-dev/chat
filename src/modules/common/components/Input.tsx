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
    <div className=" flex flex-col">
      <label className=" text-sm  text-neutral-900">{label_text}</label>
      <div className="flex items-center p-2 mt-2 border-[1px] border-neutral-300 bg-white rounded-md">
        {IconComponent}

        <input
          type="text"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full ml-1 border-none active:border-none focus:border-none focus-visible:border-none focus-visible:outline-none text-neutral-800 text-base placeholder:text-sm md:placeholder:text-base"
        />
      </div>
    </div>
  );
};

export default Input;
