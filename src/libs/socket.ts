import { io, Socket } from "socket.io-client";
import { Message, User } from "../types/types";

interface ServerToClientEvents {
    noArg: () => void;
    say: (msg: string) => void;
    message: (msg: Message) => void;
    users: (data: User[]) => void;
    'chat message': (msg: Message) => void;
    myuser: (user: User) => void
    allusers: (user: User[]) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
    'chat message': (msg: string) => void;
    message: (msg: Message) => void;
  }

const URL = 'http://localhost:3000/'

const socket:  Socket<ServerToClientEvents, ClientToServerEvents> = io(URL, { autoConnect: false })

export default socket