import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {userSlice} from "./slices/userSlice";
import {postSlice} from "./slices/postSlice";


export const store = configureStore({
    reducer: {
        userSliceState: userSlice.reducer,
        postSliceState: postSlice.reducer
    }
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); //або все в одному рядку export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>(); //або, знову ж таки, усе в одному рядку export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();