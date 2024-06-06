import { useRef, useState } from "react";
import { User } from "../../../types/types";
import Avatar from "../../common/components/Avatar";
import ClickOutsideComponent from "../../common/components/ClickOutsideComponent";
import Status from "../../common/components/Status";
import { BiDotsVertical } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteUserOfChat } from "../../../store/slices/chatSlice";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import Modal from "../../common/components/Modal";
import InfoUser from "../../user/components/InfoUser";

const HeaderMessage = ({ user }: { user: User }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeChat = () => {
    dispatch(deleteUserOfChat(user.userId));
    navigate("/chat");
  };

  console.log(showModal, "showModal");

  return (
    <header className="flex justify-between rounded-t-xl items-center w-full p-3 bg-transparent border-b-[1px] border-blue-100 dark:border-slate-900">
      <div className="flex items-center">
        <Avatar username={user?.username} />
        <p className="mx-2 text-sm text-neutral-900 dark:text-neutral-50 font-medium">
          {user?.username}
        </p>

        <Status isOnline={user?.online as boolean} />
      </div>

      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="text-neutral-900 dark:text-neutral-50 text-xl w-fit p-1 rounded-full hover:bg-neutral-600 hover:bg-opacity-30"
        >
          <BiDotsVertical />
        </button>
        {showMenu && (
          <ClickOutsideComponent
            onClose={(event) => {
              if (
                buttonRef.current &&
                !buttonRef.current.contains(event?.target as Node) &&
                !showModal
              ) {
                setShowMenu(false);
              }
            }}
          >
            <div className=" w-[170px] bg-white dark:bg-slate-900 absolute right-2 top-5 py-2 shadow-md rounded-sm z-20">
              <>
                <div
                  onClick={() => setShowModal(true)}
                  className=" text-sm text-neutral-900 dark:text-neutral-100 font-normal cursor-pointer p-2 hover:bg-neutral-200 dark:hover:bg-slate-800"
                >
                  Info. del contacto
                </div>
              </>
              <div className=" text-sm text-neutral-900 dark:text-neutral-100 font-normal cursor-pointer p-2 hover:bg-neutral-200 dark:hover:bg-slate-800">
                Bloquear
              </div>
              <div
                onClick={closeChat}
                className=" text-sm text-neutral-900 dark:text-neutral-100 font-normal cursor-pointer p-2 hover:bg-neutral-200 dark:hover:bg-slate-800"
              >
                Salir del chat
              </div>
            </div>
          </ClickOutsideComponent>
        )}
      </div>
      {showModal &&
        createPortal(
          <Modal
            onClose={() => {
              console.log("click");
              setShowModal(false);
            }}
            isOpen={showModal}
          >
            <div className="w-full min-w-[200px]">
              <InfoUser user={user} />
            </div>
          </Modal>,
          document.body
        )}
    </header>
  );
};

export default HeaderMessage;
