import React from 'react'
import { useData } from '../../store/DataContext'

const ContextTest = () => {
        const { posts } = useData()
        console.log(posts);
    
  return (
    <div>ContextTest</div>
  )
}

export default ContextTest