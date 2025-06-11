import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const fetchData = createAsyncThunk(
    "posts/fetchData",
    async (userId, thunkApi) => {
        try {
            const response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            console.log(response);
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)


const PostPage = () => {

    const dispatch = useDispatch()
    const { posts, status, error } = useSelector((state) => state.thunk)
    const [userId, setUserId] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchData(userId))
    }

    const handleFilterChange = (e) => {
        setUserId(e.target.value)
    }
    console.log(posts);

    return (
        <div>
            <h1>Gönderiler</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Kullanıcı Id'sini giriniz</label>
                    <input
                        type='number'
                        name='userId'
                        value={userId}
                        onChange={handleFilterChange}
                    />
                </div>
                <button type='submit'>Filtrele</button>

            </form>

            {status === "loading" && <div>Yükleniyor</div>}
            {status === "failed" && <div>Hata: {error}</div>}

            {
                !posts || posts.length === 0 ? (
                    <div>Henüz bir post yoktur</div>
                ) : (
                    <div>

                        {posts && posts.map((item) => (
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.body}</p>
                            </div>
                        ))}
                        
                    </div>
                )
            }
        </div>
    )
}

export default PostPage