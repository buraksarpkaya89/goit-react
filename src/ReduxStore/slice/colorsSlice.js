import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: true,
};


export const colorSlicer = createSlice({
    name: 'colorValue',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = !state.theme;
        },
        
        
    },
});
export const { toggleTheme } = colorSlicer.actions;
export default colorSlicer.reducer;