import { BiDislike, BiLike } from "react-icons/bi";

const FeedbackButton = ({
  type,
  isActive,
  count,
}: {
  type: string;
  isActive: boolean;
  count: number;
}) => {
  const icon = type === "like" ? <BiLike /> : <BiDislike />;
  const style_active = type === "like" ? "text-green-600" : "text-red-600";

  return (
    <div className="flex flex-col items-center">
      <button
        className={`w-fit h-fit p-1 text-2xl ${
          isActive ? style_active : "text-neutral-600"
        }`}
      >
        {icon}
      </button>
      <span className="text-sm text-neutral-600 font-medium">{count}</span>
    </div>
  );
};

export default FeedbackButton;
