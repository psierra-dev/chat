interface Props {
  username: string;
  size?: "xs" | "sm" | "md";
  className?: string;
}

const Avatar = ({username, size = "sm", className = ""}: Props) => {
  const firstLetter = username ? username[0] : "_";
  const size_circle: {xs: string; sm: string; md: string} = {
    xs: "text-xs md:text-sm w-8 h-8",
    sm: "text-sm md:text-base w-10 h-10",
    md: "text-base md:text-lg lg:text-xl w-16 h-16",
  };

  return (
    <div
      className={`${size_circle[size]} flex justify-center  items-center text-blue-950 font-semibold rounded-full bg-white shadow-md ${className}`}
    >
      {firstLetter}
    </div>
  );
};

export default Avatar;
