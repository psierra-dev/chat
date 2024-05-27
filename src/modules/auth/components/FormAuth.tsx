import { useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../../libs/socket";
import Input from "../../common/components/Input";
import { BiLoader } from "react-icons/bi";
import interests from "../../../consts/interests.json";
import Chip from "../../common/components/Chip";

type Status = "typing" | "loading" | "success" | "error";
const FormAuth = () => {
  const [data, setData] = useState({
    username: "",
    biography: "",
    interests: [] as string[],
  });

  const [status, setStatus] = useState<Status>("typing");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmitUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!data.username || data.interests.length === 0) return;
    setStatus("loading");

    socket.auth = data;
    socket.connect();

    setStatus("success");
    navigate("/chat");

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

    /*socket.on("connect", () => {
      console.log("connected");
      setStatus("success");
      navigate("/chat");
    });*/
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
          onChange={(e) => setData({ ...data, username: e.target.value })}
          icon="user"
        />
        <div className=" flex flex-col">
          <label className="text-sm  text-neutral-900">Bio</label>
          <textarea
            name="biography"
            onChange={(e) => setData({ ...data, biography: e.target.value })}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <div className="mb-2">
            <h5 className="text-sm  text-neutral-900">Intereses</h5>
            <p className=" text-xs font-semibold text-neutral-600">
              Elija como maximo 4 interes.
            </p>
          </div>
          <div className=" flex flex-wrap gap-1">
            {interests.map((interest) => (
              <div
                key={interest}
                className="w-fit h-fit cursor-pointer"
                onClick={() => {
                  let user_interest = data.interests;
                  if (data.interests.includes(interest)) {
                    user_interest = user_interest.filter(
                      (int) => int !== interest
                    );
                  } else {
                    if (user_interest.length < 4) {
                      user_interest = [...user_interest, interest];
                    } else {
                      return;
                    }
                  }

                  setData({
                    ...data,
                    interests: user_interest,
                  });
                }}
              >
                <Chip
                  text={interest}
                  isActive={data.interests.includes(interest)}
                />
              </div>
            ))}
          </div>
        </div>

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
