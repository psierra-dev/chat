import { User } from "../types/types";

import { useSelector } from "./useSelector";
import socket from "../libs/socket";

const useFeedback = (user: User) => {
  console.log(user);
  const currentUser = useSelector((state) => state.chat.value.currentUser);

  const isLike = user.like.includes(currentUser?.id as string);
  const isDisLike = user.dislike.includes(currentUser?.id as string);

  const like = () => {
    socket.emit("user:like", user.id, (res) => {
      if (res.status === "ok") {
        console.log(res.user, "user-resp-like");
      }
    });
  };

  const dislike = () => {
    socket.emit("user:dislike", user.id, (res) => {
      if (res.status === "ok") {
        console.log(res.user, "user-resp-dislike");
      }
    });
  };

  const onLike = () => {
    like();
  };

  const onDisLike = () => {
    dislike();
  };
  return {
    isDisLike,
    isLike,
    onDisLike,
    onLike,
  };
};

export default useFeedback;
