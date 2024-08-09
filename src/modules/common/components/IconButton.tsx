import React, {forwardRef, LegacyRef} from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const IconButton = forwardRef(
  (props: Props, ref: LegacyRef<HTMLButtonElement> | undefined) => {
    const {children, className, ...restProps} = props as Props;
    const style = `text-neutral-900 dark:text-neutral-50 text-xl w-fit p-1 rounded-full hover:bg-neutral-600 hover:bg-opacity-30 ${className}`;
    return (
      <button {...restProps} ref={ref} className={style}>
        {children}
      </button>
    );
  }
);

export default IconButton;
