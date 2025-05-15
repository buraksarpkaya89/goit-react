import React, { useEffect } from 'react'
import { useData } from '../../store/DataContext'
import axios from 'axios'

const PostList = () => {

    const { posts, loading, error,setError,setPosts,setLoading } = useData()

    const fetchPosts = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(response.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
            console.error("Error fetching posts:", error)
        }

    }
    useEffect(() => {
        fetchPosts()
    }, [])

    console.log(posts);
    console.log(loading);
    console.log(error);
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {
                    posts.slice(0,10).map((post)=> {
                        return (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PostList