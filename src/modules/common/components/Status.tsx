const Status = ({ isOnline }: { isOnline: boolean }) => {
  return (
    <div
      className={` w-1 h-1 md:w-2 md:h-2 rounded-full justify-items-center ${
        isOnline ? "bg-green-700" : "bg-red-700"
      }`}
    ></div>
  );
};

export default Status;
