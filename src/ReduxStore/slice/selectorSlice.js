import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    value: 0,
    isActive: false,
    history : []
}

export const selectorSlice = createSlice({
    name : "selector",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.history.push({
                type: "increment",
                value:state.value,
                timestamp : new Date().toISOString()
            })
        },
        decrement: (state) => {
            state.value -= 1;
            state.history.push({
                type: "decrement",
                value:state.value,
                timestamp : new Date().toISOString()
            })
        },
        toggleActive: (state) => {
            state.isActive = !state.isActive;
            state.history.push({
                type: "toggle",
                value:state.value,
                timestamp : new Date().toISOString(),
                isActive: state.isActive
            })
        },
        reset: (state) => {
            state.value = 0
            state.isActive = false
            state.history = []
        }
    }
})

export const {increment,decrement,toggleActive,reset} = selectorSlice.actions
export default selectorSlice.reducer