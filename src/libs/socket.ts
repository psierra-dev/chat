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
    'message:private': ( message: Message ) => void;
    'user:connected': (user: User) => void
    'user:all': (users: User[]) => void
    
  }
  
  interface ClientToServerEvents {
    hello: () => void;
    'chat message': (msg: string) => void;
    message: (msg: Message) => void;
    'get users filtered': (interests: string[], callback: (users: User[]) => void) => void;
    'user:search': (username: string, callback: (user: User) => void) => void;
    'message:private': ( message: Message ) => void;
  }

const URL = 'http://localhost:3000/'

const socket:  Socket<ServerToClientEvents, ClientToServerEvents> = io(URL, { autoConnect: false })

export default socket