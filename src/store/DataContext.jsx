import React, { createContext, useContext, useState } from 'react'

const DataContext = createContext()

const DataProvider = ({children}) => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const deger = {
        posts,
        loading,
        error,
        setPosts,
        setLoading,
        setError
    }

    return (
        <DataContext.Provider value={deger}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider


export function useData() {
    return useContext(DataContext)
}