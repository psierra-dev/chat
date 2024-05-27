import { createSlice } from "@reduxjs/toolkit"
import { User } from "../../types/types"

interface UserState {
    value: {
        users: User[] | null,
        selectedUser: User | null 
    }
}

const initialState: UserState = {
    value: {
        users: null,
        selectedUser: null
    }
}

export const listUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.users?.push(action.payload)
        },
        setUsers: (state, action) => {
            state.value.users = action.payload
        },
        setUserInfo: (state, action) => {
            state.value.selectedUser = action.payload
        }
    }
})

export const { setUsers, setUserInfo, addUser } = listUserSlice.actions

export default listUserSlice.reducer