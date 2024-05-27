import { createSlice } from "@reduxjs/toolkit"
import { User } from "../../types/types"

interface UserState {
    value: {
        currentUser: User 
    }
}

const initialState: UserState = {
    value: {
        currentUser: {
            username: '',
            biography: '',
            id: '',
            interests: [],
            like: 0,
            dislike: 0
        }
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.value.currentUser = action.payload
        },
        updateInterests: (state, action) => {
            const interest = action.payload
            let user_interest = state.value.currentUser.interests

            if(user_interest.includes(interest)) {
                user_interest = user_interest.filter(int => int !== interest)
            } else {
                if(user_interest.length < 4) {
                    user_interest = [...user_interest, interest]
                }
            }


            state.value.currentUser = {
                ...state.value.currentUser,
                interests: user_interest
            } 
        }
    }
})

export const { setCurrentUser, updateInterests } = userSlice.actions

export default userSlice.reducer