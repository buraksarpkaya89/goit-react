import React from 'react'
import CounterDisplay from '../components/ReduxToolkit/CounterDisplay'
import PostList from '../components/ReduxToolkit/PostList'

const AppRedux = () => {
  return (
    <div>
        <CounterDisplay />
        <PostList />
    </div>
  )
}

export default AppRedux