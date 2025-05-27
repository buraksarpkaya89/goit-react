import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setError, setLoading, setPosts } from '../../ReduxStore/slice/postSlice';
import axios from 'axios';
import { toggleTheme } from '../../ReduxStore/slice/colorsSlice';

const PostList = () => {


    const dispatch = useDispatch()
    const { posts, loading, error } = useSelector((state) => state.posts)
    const theme = useSelector((state) => state.colorValue.theme)


    const getPosts = async () => {
        try {
            dispatch(setLoading())
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(setPosts(data))
        } catch (error) {
            dispatch(setError(error.message))
        }
    }
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div style={{ backgroundColor: theme === true ? "#333" : "#fff" }}>
            <button onClick={() => dispatch(toggleTheme())}>Tema</button>
            <h2>Post List</h2>
            {
                posts && posts.map((item) => (
                    <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostList