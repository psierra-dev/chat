import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";

function App() {
  /*useEffect(() => {
    socket.on("myuser", (user) => {
      console.log(user, "user");
      dispatch(setUser(user));
    });
  }, []);*/
  return (
    <>
      <RouterProvider router={router} />

      {/*  <h1>Chat</h1>
      {connected ? <p>conectado</p> : <p>desconectado</p>}
      {users &&
        users.length > 0 &&
        users.map((u) => <p key={u?.id}>{u.username}</p>)}
      {!connected ? (
        <>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <button onClick={onUsernameConnect}>Conectar</button>
        </>
      ) : (
        <button onClick={onDisconnect}>Desconectar</button>
      )}

    {connected && <Messages />}*/}
    </>
  );
}

export default App;
