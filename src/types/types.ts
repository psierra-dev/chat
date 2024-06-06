type Interest = string 

export interface User {
    username: string,
    id: string | number,
    userId: string | number,
    sessionId: string | number,
    interests: Interest[],
    like: string[],
    dislike: string[],
    biography: string,
    online?: boolean
}

export interface Message {
    message: string,
    sender?: User | string,
    toId?: string  | number,
    fromId?: string  | number,
    self: boolean,
    read: boolean
}

export interface UserChat extends User {
    messages: Message[]
}