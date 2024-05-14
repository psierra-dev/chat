import { useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../../libs/socket";
import Input from "../../common/components/Input";
import { BiLoader } from "react-icons/bi";

type Status = "typing" | "loading" | "success" | "error";
const FormAuth = () => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState<Status>("typing");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmitUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username) return;
    setStatus("loading");

    socket.auth = { username };
    socket.connect();

    socket.on("connect_error", (e) => {
      console.log("error", e.message);
      setStatus("error");
      setError(e.message);
    });

    /*socket.on('user already exists' , (data) => {
      if(data) {
        setStatus('error')
      }
    })*/

    socket.on("connect", () => {
      console.log("connected");
      setStatus("success");
      navigate("/chat");
    });
  }

  return (
    <div className="m-2 w-full max-w-[500px]">
      <h4 className=" text-lg text-neutral-900 md:text-xl font-semibold">
        Bienvenido/a
      </h4>
      <form onSubmit={handleSubmitUser} className=" flex flex-col gap-2 mt-4">
        <Input
          name="username"
          label_text="Username"
          onChange={(e) => setUsername(e.target.value)}
          icon="user"
        />

        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p className="text-xs text-blue-500">
            Aceptar terminos y condiciones
          </p>
        </div>
        <button
          disabled={status === "loading"}
          className="w-full py-2 h-10 flex justify-center items-center mt-4 bg-blue-800 hover:bg-blue-950 text-white font-medium rounded-md disabled:bg-blue-700"
        >
          {status === "loading" ? (
            <span className=" animate-spin text-sm text-white">
              <BiLoader />
            </span>
          ) : (
            "Entrar"
          )}
        </button>
        {error && (
          <span className=" text-sm font-semibold text-center text-red-500">
            {error}
          </span>
        )}
      </form>
    </div>
  );
};

export default FormAuth;
