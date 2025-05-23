// Shree Ganeshay namah 

import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    value : 0
}


export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            console.log(state)
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
        incrementByAmount : (state, action) => {
            console.log(action)
            state.value += action.payload
        }

    }
})


export default counterSlice.reducer
export const {increment, decrement, incrementByAmount} = counterSlice.actions