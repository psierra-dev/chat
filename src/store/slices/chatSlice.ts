import { createSlice } from "@reduxjs/toolkit"
import { Message, User } from "../../types/types"

interface UserChat extends User {
    messages: Message[]
}

interface ChatState {
    value: {
        currentUser: User | null,
        allUsers: User[],
        selectedUsetInfo: string | number,
        chatUsers: UserChat[], 
    }
}

const initialState: ChatState = {
    value: {
        currentUser: null,
        allUsers: [],
        selectedUsetInfo: "",
        chatUsers: [],
    }
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.value.currentUser = action.payload
        },
        updateInterests: (state, action) => {
            const interest = action.payload
            let user_interest = state.value.currentUser?.interests

            if(user_interest && user_interest.includes(interest)) {
                user_interest = user_interest.filter(int => int !== interest)
            } else {
                if(user_interest && user_interest.length < 4) {
                    user_interest = [...user_interest, interest]
                }
            }


            state.value.currentUser = {
                ...state.value.currentUser,
                interests: user_interest as string[]
            } as User
        },
        updateLikeOrDislike(state, action) {
            const userId = action.payload.userId
            const newValues = action.payload.list
            const type = action.payload.type

            
            const indexUser = state.value.chatUsers.findIndex(user => user.id = userId)
            
            if(type === "like") {
                state.value.chatUsers[indexUser].like = newValues

            } else {
                state.value.chatUsers[indexUser].dislike = newValues
            }
        },
        addUser: (state, action) => {
            state.value.allUsers?.push(action.payload)
        },
        updateUser: (state, action) => {
            const userUpdate: User = action.payload
            const indexAllUser = state.value.allUsers.findIndex(user => user.id === userUpdate.id)
            const indexChatUser = state.value.chatUsers.findIndex(user => user.id === userUpdate.id)

            if(indexAllUser !== -1) {
                state.value.allUsers[indexAllUser] = userUpdate
            }

            if(indexChatUser !== -1) {
                const messages = state.value.chatUsers[indexChatUser].messages
                state.value.chatUsers[indexChatUser] = { ...userUpdate, messages }
            }
        },
        deleteUser: (state, action) => {
            const userId = action.payload
            state.value.allUsers = state.value.allUsers.filter(user => user.id !== userId)
            
            const indexUser = state.value.chatUsers.findIndex(user => user.id === userId)

            if(indexUser !== -1) {
                state.value.chatUsers[indexUser].online = false
            }

        },
        setUsers: (state, action) => {
            state.value.allUsers = action.payload
        },
        setUserInfo: (state, action) => {
            state.value.selectedUsetInfo = action.payload
        },
        addUserToChat(state, action) {
            const isAdded = state.value.chatUsers.some((u) => action.payload.id === u.id)
            if(isAdded) return

            state.value.chatUsers.push({...action.payload, messages: []})
        },
        deleteUserOfChat(state, action) {
            const userId = action.payload
            state.value.chatUsers = state.value.chatUsers.filter(user => user.id !== userId)
        },
        addMessageToUser(state, action) {
            const newMessage: Message = action.payload
            const id = newMessage.self ? newMessage.toId : newMessage.fromId
           
            const indexUser = state.value.chatUsers.findIndex(u => u.id === id)

            if(indexUser !== -1) {
                state.value.chatUsers[indexUser].messages.push(newMessage)
            } else {
                const senderUser = newMessage.sender as User
                const newUser = {...senderUser, messages: []}
                console.log(newUser, '--newUser')
                state.value.chatUsers.push(newUser)
               
                const lastIndex = state.value.chatUsers.length - 1
                

                state.value.chatUsers[lastIndex].messages.push(newMessage)
            }
        }

    }
})

export const { 
    addUserToChat,
    deleteUserOfChat, 
    addMessageToUser, 
    addUser,
    updateUser,
    deleteUser, 
    setCurrentUser,
    updateInterests,
    updateLikeOrDislike, 
    setUserInfo, 
    setUsers } = chatSlice.actions

export default chatSlice.reducer