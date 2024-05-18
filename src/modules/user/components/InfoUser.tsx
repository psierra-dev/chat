import Avatar from "../../common/components/Avatar";
import FeedbackButton from "../../common/components/FeedbackButton";

const InfoUser = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center">
        <Avatar username={"Pablo"} size={"md"} />
        <span className=" text-base font-semibold text-neutral-900">
          Pablo25
        </span>

        <p className=" text-sm font-medium text-neutral-500 mt-1">
          "Hola solo busco hablar de bocaa y de bocaaa."
        </p>
      </div>
      <div className=" w-full mt-2">
        <div className="flex w-full justify-center gap-2">
          <FeedbackButton type="like" isActive={true} count={2} />
          <FeedbackButton type="deslike" isActive={false} count={2} />
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
