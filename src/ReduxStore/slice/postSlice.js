import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        setLoading: ( state) => {
            state.loading = true;
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
          
        },
        setError:(state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }});

    export const { setLoading, setPosts, setError } = postSlice.actions;
    export default postSlice.reducer;