import React from 'react'

const TodoHeader = ({searhText,setSearchText}) => {
  return (
    <div>
        <h1>Todo Listesi</h1>
        <input
            type='text'
            placeholder='Görev ara...'
            value={searhText}
            onChange={(e)=>setSearchText(e.target.value)}
        />
    </div>
  )
}

export default TodoHeader