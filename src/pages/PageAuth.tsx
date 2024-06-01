import FormAuth from "../modules/auth/components/FormAuth";

const PageAuth = () => {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <main className="flex flex-1 justify-center items-center">
        <section className="flex w-full md:px-10 lg:px-24 xl:px-80">
          <div className="w-1/2 hidden md:block">
            <img
              src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" rounded-s-md h-full w-full object-cover"
            />
          </div>
          <div className=" flex justify-center w-full md:w-1/2">
            <FormAuth />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PageAuth;
