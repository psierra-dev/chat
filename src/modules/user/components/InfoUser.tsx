import { User } from "../../../types/types";
import Avatar from "../../common/components/Avatar";
import Chip from "../../common/components/Chip";
import FeedbackButton from "../../common/components/FeedbackButton";
import useFeedback from "../../../hooks/useFeedback";

const InfoUser = ({ user }: { user: User }) => {
  const { isDisLike, isLike, onDisLike, onLike } = useFeedback(user);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center">
        <Avatar username={user?.username} size={"md"} />
        <span className=" text-base font-semibold text-neutral-900">
          {user.username}
        </span>

        <p className=" text-sm text-center font-medium text-neutral-500 mt-1">
          {user.biography}
        </p>
      </div>
      <div className=" w-full mt-2">
        <div className="flex w-full justify-center gap-2">
          <FeedbackButton
            onClick={onLike}
            type="like"
            isActive={isLike}
            count={user.like.length}
          />
          <FeedbackButton
            onClick={onDisLike}
            type="deslike"
            isActive={isDisLike}
            count={user.dislike.length}
          />
        </div>
      </div>
      <div className="flex gap-1">
        {user.interests.map((interest) => (
          <Chip key={interest} text={interest} />
        ))}
      </div>
    </div>
  );
};

export default InfoUser;
