import React, { useState } from 'react'

const OnclickComp = ({ message, children,isOpen,setIsOpen,handleClick1 }) => {
    // let clicks = 0;
    const [number, setNumber] = useState(10)
    const [deger, setDeger] = useState("baslangic")
    const [isLoading, setIsLoading] = useState(false)
    console.log(deger);

    console.log(number);
    const handleClick = () => {
        setNumber(number + 1)
        setDeger("bitis")
        setIsLoading(!isLoading)
    }
    

    return (
        <div style={{ fontSize: "25px" }}>
            <button onClick={handleClick1}>{isOpen ? "Kapat" : "Aç"}</button>
            {
                isOpen ? <p>test</p>
                : <p>test1</p>
            }

            {/* <button onClick={() => console.log(message)}>
                {children}
            </button>
            
            <button onClick={handleClick}>{number}</button>
            {
                isLoading ?
                <p>deger true oldu</p>
                : ""
            } */}


        </div>
    )
}

export default OnclickComp