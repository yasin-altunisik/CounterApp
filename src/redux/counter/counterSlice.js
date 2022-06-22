import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementbyAmount: (state, action) => {
            state.value += Number(action.payload)
        }
    }
})

export const {increment, decrement, incrementbyAmount} = counterSlice.actions;
export default counterSlice.reducer