import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

axios.defaults.baseURL = 'https://task-manager-api.goit.global/'

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
}

export const register = createAsyncThunk(
    "auth/register",
    async(credentials,thunkAPI) => {
        try {
            const res = await (await axios.post("/users/signup",credentials))
            setAuthHeader(res.data.token)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
// ben burda şu işlemi yaptım ve şu amacla fonksiyonları yazdım
export const login = createAsyncThunk(
    "auth/login",
    async(credentials,thunkAPI) => {
        try {
            const res = await axios.post("/users/login",credentials)
            setAuthHeader(res.data.token)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)            
        }
    }
)

export const logOut = createAsyncThunk(
    "auth/logout",
    async(_,thunkAPI) => {
        try {
            await axios.post("/users/logout")
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_,thunkAPI) => {
        const state = thunkAPI.getState()
        const persistedToken = state.auth.token

        if(persistedToken === null) {
            return thunkAPI.rejectWithValue("token yoktur")
        }

        try {
            setAuthHeader(persistedToken)
            const res = await axios.get("/users/me")
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)