import React from 'react'

const Footer = ({ children }) => {


    const theme = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "red",
        color: "white"
    }

    return (
        <h1 style={theme}>
            merhaba
            {children}
        </h1>
    )
}

export default Footer