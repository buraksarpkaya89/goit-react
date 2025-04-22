import React, { useState } from 'react'

const Users = () => {
    const [user,setUser] = useState({
        name: "Ozan",
        age: 28,
        city: "İstanbul"
    })
    console.log(user);

    const handleClick =() => {
        setUser({
            ...user,
            age :user.age +1
        })
    }
  return (
    <div>
        <p>Ad: {user.name} Yaş: {user.age} sehir : {user.city}</p>
        <button onClick={handleClick}>Yaş güncelle</button>
    </div>
  )
}

export default Users