import {useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, incrementbyAmount} from "../redux/counter/counterSlice"

function Counter() {
    const [amount, setAmount] = useState(0);
    const countValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <h1 class="my-5">{countValue}</h1>
            <button class="btn btn-primary mx-4 my-2" onClick={() => dispatch(decrement())}>decrement</button>
            <button class="btn btn-primary mx-4 my-2" onClick={() => dispatch(increment())}>increment</button>
            <br/>
            <br/>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button class="btn btn-primary mx-4 my-2" onClick={() => dispatch(incrementbyAmount(amount))}>incrementbyAmount</button>

        </div>
    )
}

export default Counter