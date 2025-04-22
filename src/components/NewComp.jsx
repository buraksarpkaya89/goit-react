import React, { useState } from 'react'

const NewComp = ({isOpen,setIsOpen,handleClick1}) => {

    const [miktar, setMiktar] = useState(0)
  const [urunAdi, setUrunAdi] = useState("Elma")

    const handleClick = () => {
        setMiktar(miktar + 1)
        setUrunAdi("Armut")
    }
  

    return (
        <div>
            <button onClick={handleClick}>Tıkla</button>
            <button onClick={handleClick1}>{isOpen ? "Kapat" : "Aç"}</button>

            {
                isOpen ?
                    <div>
                        <p>Urün adı: {urunAdi}</p>
                        <p>Miktarı: {miktar}</p>
                    </div>
                    : ""
            }
        </div>
    )
}

export default NewComp