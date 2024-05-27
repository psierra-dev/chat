import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import listUserSlice from "./slices/listUserSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    listUsers: listUserSlice,
    chat: chatSlice
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>

export default store
