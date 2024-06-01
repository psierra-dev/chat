import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


import chatSlice from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    chat: chatSlice
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>

export default store
