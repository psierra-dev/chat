type Interest = string 

export interface User {
    username: string,
    id: string | number,
    interests: Interest[],
    like: number,
    dislike: number,
    biography: string
}

export interface Message {
    message: string,
    sender?: User | string,
    toId?: string  | number,
    fromId?: string  | number,
    self: boolean
}