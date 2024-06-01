import { io, Socket } from "socket.io-client";
import { Message, User } from "../types/types";

interface ServerToClientEvents {
  "user:current": (user: User) => void
  'user:connected': (user: User) => void
  'user:disconnected': (userId: string | number) => void
  'user:all': (users: User[]) => void
  'user:update': (user: User) => void
  'message:private': ( message: Message ) => void;
  
}

interface ClientToServerEvents {
  'message:private': ( message: Message ) => void;
  'user:like': (userId: string | number, callback: (res:{ status: "ok" |  "nok", user?: User }) => void ) => void;
  'user:dislike': (userId: string | number, callback: (res:{ status: "ok" |  "nok", user?: User }) => void ) => void;
}

const apiUrl = import.meta.env.VITE_APP_API_URL as string;

console.log(apiUrl, 'apiUrl')
const socket:  Socket<ServerToClientEvents, ClientToServerEvents> = io(apiUrl, { autoConnect: false })

export default socket