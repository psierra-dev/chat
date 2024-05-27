import WrapperCategory from "../modules/user/components/WrapperCategory";
import FilterableUserList from "../modules/user/components/FilterableUserList";
import InfoUser from "../modules/user/components/InfoUser";

const PageUsers = () => {
  return (
    <div className=" w-full h-full pt-12 flex flex-col flex-1 lg:flex-row gap-2 md:gap-4">
      <aside className="flex flex-col bg-neutral-100 rounded-2xl">
        <div className=" p-3 md:p-4 flex  flex-1 w-full lg:max-w-[350px]">
          <WrapperCategory />
        </div>
      </aside>
      <main className="flex flex-col lg:flex-row flex-1 bg-neutral-100 rounded-2xl overflow-auto">
        <FilterableUserList />
        <section className=" hidden lg:flex w-[40%] p-2 md:p-4 border-l-2">
          <InfoUser />
        </section>
      </main>
    </div>
  );
};

export default PageUsers;
