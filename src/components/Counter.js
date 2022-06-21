import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from "../redux/counter/counterSlice"

function Counter() {
    const countValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <h1 class="my-5">{countValue}</h1>
            <button class="btn btn-primary mx-4 my-2" onClick={() => dispatch(decrement())}>decrement</button>
            <button class="btn btn-primary mx-4 my-2" onClick={() => dispatch(increment())}>increment</button>
        </div>
    )
}

export default Counter