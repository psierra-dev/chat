import WrapperCategory from "../modules/user/components/WrapperCategory";
import FilterableUserList from "../modules/user/components/FilterableUserList";
import WrapperInfoUser from "../modules/user/components/WrapperInfoUser";
import ControlPanel from "../modules/common/components/ControlPanel";

const PageUsers = () => {
  return (
    <div className=" w-full h-full pt-12 flex flex-col flex-1 lg:flex-row gap-2 md:gap-4">
      <aside className="flex flex-col bg-white dark:bg-slate-950 rounded-2xl">
        <div className=" p-3 md:p-4 flex flex-col justify-between  flex-1 w-full lg:max-w-[350px]">
          <WrapperCategory />
          <div className=" hidden lg:block">
            <ControlPanel />
          </div>
        </div>
      </aside>
      <main className="flex flex-col lg:flex-row flex-1 bg-white dark:bg-slate-950 rounded-2xl overflow-auto">
        <FilterableUserList />
        <section className=" hidden lg:flex w-[40%] p-2 md:p-4 border-l-[1px] dark:border-l-slate-900">
          <WrapperInfoUser />
        </section>
      </main>
    </div>
  );
};

export default PageUsers;
