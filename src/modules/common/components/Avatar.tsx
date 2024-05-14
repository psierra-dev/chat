const Avatar = ({ username }: { username: string }) => {
  const firstLetter = username[0];
  return (
    <div className=" w-6 h-6 md:w-10 md:h-10 flex justify-center items-center text-sm md:text-base text-blue-950 font-semibold rounded-full bg-white shadow-md">
      {firstLetter}
    </div>
  );
};

export default Avatar;
