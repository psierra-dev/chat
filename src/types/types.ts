export interface User {
    username: string,
    id: string
}

export interface Message {
    username?: string,
    msg: string,
    from: string,
    to: string,
    id?: string
}