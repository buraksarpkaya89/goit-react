import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [metin, setMetin] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        if (!metin.trim()) return;
        addTodo(metin)
        setMetin("")
    }

    return (
        <div>

            <input
                type='text'
                placeholder='Yeni görev ekle'
                value={metin}
                onChange={(e) => setMetin(e.target.value)}
            />
            <button onClick={handleClick}>Ekle</button>
        </div>
    )
}

export default TodoForm