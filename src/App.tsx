import React, {FC} from 'react';

import './App.css';
import {counter1Slice, decrement, incByAmount, reset, useAppDispatch, useAppSelector} from "./redux/store";

const App: FC = () => {
    const counter1ValueState = useAppSelector(state => state.counter1SliceState.value);

    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>{counter1ValueState}</h2>

            <button onClick={() => dispatch(counter1Slice.actions.increment())}>Increment</button>

            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incByAmount(10))}>Increase by</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default App;
