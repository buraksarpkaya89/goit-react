import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    status:"idle",
    error: null
};


export const thunkSlice = createSlice({
    name: 'thunk',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase('posts/fetchData/pending', (state) => {
            state.status = "loading"
        })
        .addCase('posts/fetchData/fulfilled', (state,action) => {
            state.status = "succeeded"
            state.posts = action.payload
        })
        .addCase('posts/fetchData/rejected', (state,action) => {
            state.status = "failed"
            state.error = action.payload.message
        })
        
    },
});
export default thunkSlice.reducer;