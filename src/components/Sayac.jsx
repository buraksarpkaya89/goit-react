import React, { useState } from 'react'

const Sayac = () => {

    const [number, setNumber] = useState(0)
    const [gece,setGece] = useState(false)

    const handleArttır =() => {
        setNumber(number + 1)
    }

    const stil = {
        backgroundColor : gece ? "black" : "yellow",
        color : gece ? "white" : "black"
    }



    return (
        <div style={stil}>
            <p>{number}</p>
            <button onClick={handleArttır}>Arttır</button>
            <button onClick={() => setNumber(number - 1)}>Azalt</button>
            <button onClick={() => setNumber(0)}>Sıfırla</button>
            <button onClick={()=> setNumber(number + 5)}>5 arttır</button>
            <button onClick={() =>setGece(!gece) }>{gece ? "Gündüz yap" : "Gece yap"}</button>

        </div>
    )
}

export default Sayac