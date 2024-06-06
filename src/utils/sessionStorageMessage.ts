import { Message } from "../types/types"

interface MessageSession {
    [key: string]: Message[];
}

function addMessage(message: Message, username: string, userId: string | number) {
    let messages = getMessages()
    const key = `${username}:${userId}`
    if(messages !== null ) {
        if(key in messages) {
            messages[key] = [...messages[key], message]
        } else {
            messages[key] = [message]
        }
    } else {
        messages = {
            [key]: [message] 
        }
    }
    
    sessionStorage.setItem("messages", JSON.stringify(messages))
}

function getMessages(): MessageSession | null  {
    const messages = sessionStorage.getItem("messages")

    return messages ? JSON.parse(messages) : null
}

function getMessagesOfUser(username: string, userId: string | number) {
    const messages = getMessages()
    const key = `${username}:${userId}`
    let userMessages = null
    if(messages !== null && key in messages) {
        userMessages = messages[key]
    }
    return userMessages
}

export {
    addMessage,
    getMessagesOfUser
}