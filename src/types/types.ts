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
    username?: string,
    msg: string,
    from: string,
    to: string,
    id?: string
}