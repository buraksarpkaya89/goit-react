import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import colorSlicer from './slice/colorsSlice'
import postSlice from './slice/postSlice'
import cartReducer from './slice/cartSlice'
import thunkReducer from './slice/thunkSlice'

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["counterValue", "colorValue", "posts", "cart","thunk"]
};

const rootreducer = combineReducers({
  counterValue: counterSlice,
  colorValue: colorSlicer,
  posts: postSlice,
  cart: cartReducer,
  thunk: thunkReducer,
})
const persistedReducer = persistReducer(persistConfig, rootreducer);


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
