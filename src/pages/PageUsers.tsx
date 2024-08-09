import WrapperCategory from "../modules/user/components/WrapperCategory";
import FilterableUserList from "../modules/user/components/FilterableUserList";
import WrapperInfoUser from "../modules/user/components/WrapperInfoUser";
import ControlPanel from "../modules/common/components/ControlPanel";
import {BiArrowBack} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import IconButton from "../modules/common/components/IconButton";

const PageUsers = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full h-full pt-12 flex flex-col flex-1 lg:flex-row gap-2 md:gap-4">
      <aside className="p-3 md:p-4 flex flex-col bg-white dark:bg-slate-950  border-[1px] dark:border-[#020f17] rounded-2xl">
        <IconButton onClick={() => navigate("/chat")}>
          <BiArrowBack />
        </IconButton>
        <div className="  flex flex-col justify-between  flex-1 w-full lg:max-w-[350px]">
          <WrapperCategory />
          <div className=" hidden lg:block">
            <ControlPanel />
          </div>
        </div>
      </aside>
      <main className="flex flex-col lg:flex-row flex-1 bg-white dark:bg-slate-950  border-[1px] dark:border-[#020f17] rounded-2xl overflow-auto">
        <FilterableUserList />
        <section className=" hidden lg:flex w-[40%] p-2 md:p-4 border-l-[1px] dark:border-l-slate-900">
          <WrapperInfoUser />
        </section>
      </main>
    </div>
  );
};

export default PageUsers;
