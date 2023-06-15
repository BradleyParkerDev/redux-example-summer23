import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',  //need to be unique
    initialState: {
        value: 10
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            // state.value = state.value - 1
            state.value -= 1
        },
        increaseByAmount: (state, action) => {
            console.log(action)
            // state.value = state.value + action.payload
            state.value += parseInt(action.payload)
        } 
    },
})

// Action creator are generated for each reducer function here, basically sets up dispatch
export const {increment, decrement, increaseByAmount} = counterSlice.actions

//not reducers plural, basically final output of createSlice
export default counterSlice.reducer