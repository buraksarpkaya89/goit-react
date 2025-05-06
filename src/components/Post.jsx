import React, { useEffect, useState } from 'react'

const Post = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)
    const [number, setNumber] = useState(15)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${number}`)
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        }

        fetchPost();
    }, [refresh])

    if (loading) return <div>...loading</div>

    const handleRefresh = () => {
        setNumber(5)
        setRefresh(!refresh)
    }

    return (
        <div>
            <h2>Gönderiler</h2>
            <button onClick={handleRefresh}>Yenile</button>
            <ul>
                {posts.map(item => (
                    <div>
                        <li key={item.id}>{item.title}</li>
                        <p>{item.body}</p>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default Post