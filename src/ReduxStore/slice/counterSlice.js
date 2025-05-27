import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    isActive: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            state.isActive = state.value > 10 ? true : false

        },
        decrement: (state) => {
            state.value -= 1
            state.isActive = state.value > 10 ? true : false
        },
        incrementFive: (state) => {
            state.value += 5
            state.isActive = state.value > 10 ? true : false

        },
        toggleActive: (state) => {
            state.isActive = !state.isActive
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
            state.isActive = state.value > 10 ? true : false


        },
    },
})

export const { increment, decrement, incrementFive, toggleActive, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer