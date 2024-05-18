const Avatar = ({
  username,
  size = "sm",
}: {
  username: string;
  size?: "sm" | "md";
}) => {
  const firstLetter = username[0];
  const size_circle: { sm: string; md: string } = {
    sm: "text-sm md:text-base w-10 h-10",
    md: "text-base md:text-lg lg:text-xl w-16 h-16",
  };

  return (
    <div
      className={`${size_circle[size]} flex justify-center  items-center text-blue-950 font-semibold rounded-full bg-white shadow-md`}
    >
      {firstLetter}
    </div>
  );
};

export default Avatar;
