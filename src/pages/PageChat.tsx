import { Outlet } from "react-router-dom";

import WrapperUsers from "../modules/chat/components/WrapperUsers";
import ControlPanel from "../modules/common/components/ControlPanel";

const PageChat = () => {
  return (
    <div className=" w-full h-full pt-12 flex flex-col flex-1 lg:flex-row gap-2 md:gap-4">
      <aside className="flex flex-col bg-white shadow-lg rounded-2xl">
        <div className=" p-2 md:p-4 flex flex-col flex-1 w-full md:min-w-[350px] overflow-auto">
          <WrapperUsers />
          <ControlPanel />
        </div>
      </aside>

      <main className="flex flex-col flex-1 bg-white shadow-lg rounded-2xl overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default PageChat;
