import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import socket from "../../../libs/socket";
import Input from "../../common/components/Input";
import { BiLoader } from "react-icons/bi";
import interests from "../../../consts/interests.json";
import Chip from "../../common/components/Chip";

const apiUrl = import.meta.env.VITE_APP_API_URL as string;
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

  async function handleSubmitUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !data.username ||
      data.interests.length === 0 ||
      data.biography.length === 0
    )
      return;
    setStatus("loading");

    try {
      const resp = await axios.post(`${apiUrl}/login`, data);

      console.log(resp);
      if (resp.status === 200) {
        socket.auth = data;
        socket.connect();
        setStatus("success");
        navigate("/chat");
      } else if (resp.status === 400) {
        setStatus("error");
        setError("Username en uso");
      }
    } catch (error) {
      setStatus("error");
      setError("Error");
      console.log(error, "error");
    }
  }

  return (
    <div className=" w-full max-w-[500px] md:max-w-[600px]  md:border-[1px] border-neutral-300 rounded-r-lg p-3 md:p-6">
      <h4 className=" text-center text-neutral-900 text-3xl md:text-4xl font-semibold font-sans">
        Pendeja
      </h4>
      <form onSubmit={handleSubmitUser} className=" flex flex-col gap-2 mt-4">
        <Input
          name="username"
          label_text="Username"
          onChange={(e) => {
            if (status === "error") {
              setStatus("typing");
              setError("");
            }
            setData({ ...data, username: e.target.value });
          }}
          icon="user"
        />
        <div className=" flex flex-col">
          <label className="text-sm  text-neutral-900">Bio</label>
          <textarea
            name="biography"
            onChange={(e) => setData({ ...data, biography: e.target.value })}
            className="w-full p-2 border-[1px] bg-neutral-100  text-neutral-800 text-base placeholder:text-sm md:placeholder:text-base rounded-md"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <div className="mb-2">
            <h5 className="text-sm  text-neutral-900">Intereses</h5>
            <p className=" text-xs font-semibold text-neutral-600">
              Elija como maximo 5 interes.
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
                    if (user_interest.length < 5) {
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
          className="w-full py-2 h-10 flex justify-center items-center mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md disabled:bg-blue-500"
        >
          {status === "loading" ? (
            <span className=" animate-spin text-sm text-white">
              <BiLoader />
            </span>
          ) : (
            "Entrar"
          )}
        </button>
        {status === "error" && error && (
          <span className=" text-sm font-semibold text-center text-red-500">
            {error}
          </span>
        )}
      </form>
    </div>
  );
};

export default FormAuth;
