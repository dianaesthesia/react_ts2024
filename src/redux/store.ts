import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type CounterStateType = {
    value: number
}

const initialState: CounterStateType = {
    value: 0
};

export const counter1Slice = createSlice({
    name: "counter1SliceName",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incByAmount: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        reset: (state) => {
            state.value = initialState.value;
        }
    }
});

export const {decrement, incByAmount, increment, reset} = counter1Slice.actions;

const store = configureStore({
    reducer: {
        counter1SliceState: counter1Slice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;












