import React from "react";
import FormAuth from "../modules/auth/components/FormAuth";

const PageAuth = () => {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <header className=" p-2 w-full bg-blue-950">
        <h1 className=" text-lg font-semibold text-white">Chat</h1>
      </header>
      <main className="flex flex-1 justify-center items-center">
        <FormAuth />
      </main>
      <footer className="p-2 w-full bg-blue-950">
        <h1 className=" text-lg font-semibold text-white">Chat</h1>
      </footer>
    </div>
  );
};

export default PageAuth;
