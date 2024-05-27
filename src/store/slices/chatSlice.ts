import { createSlice } from "@reduxjs/toolkit"
import { Message, User } from "../../types/types"

interface UserChat extends User {
    messages: Message[]
}

interface ChatState {
    value: {
        chatUsers: UserChat[], 
    }
}

const initialState: ChatState = {
    value: {
        chatUsers: [],
    }
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addUser(state, action) {
            const isAdded = state.value.chatUsers.some((u) => action.payload.id === u.id)
            if(isAdded) return

            state.value.chatUsers.push({...action.payload, messages: []})
        },
        addMessage(state, action) {
            const newMessage: Message = action.payload
            const id = newMessage.self ? newMessage.toId : newMessage.fromId
           
            const indexUser = state.value.chatUsers.findIndex(u => u.id === id)

            if(indexUser !== -1) {
                state.value.chatUsers[indexUser].messages.push(newMessage)
            } else {
                const senderUser = newMessage.sender as User
                const newUser = {...senderUser, messages: []}
                console.log(newUser, '--newUser')
               
                const lastIndex = state.value.chatUsers.length - 1
                

                state.value.chatUsers[lastIndex].messages.push(newMessage)
            }
        }

    }
})

export const { addUser, addMessage } = chatSlice.actions

export default chatSlice.reducer