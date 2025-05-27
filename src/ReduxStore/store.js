import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import colorSlicer from './slice/colorsSlice'
import postSlice from './slice/postSlice'

export const store = configureStore({
  reducer: {
    counterValue: counterSlice,
    colorValue: colorSlicer,
    posts: postSlice
  },
})