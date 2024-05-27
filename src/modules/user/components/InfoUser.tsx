import { useSelector } from "../../../hooks/useSelector";
import Avatar from "../../common/components/Avatar";
import FeedbackButton from "../../common/components/FeedbackButton";

const InfoUser = () => {
  const user = useSelector((state) => state.listUsers.value.selectedUser);

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center">
      {user && (
        <>
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
              <FeedbackButton type="like" isActive={true} count={2} />
              <FeedbackButton type="deslike" isActive={false} count={2} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoUser;
