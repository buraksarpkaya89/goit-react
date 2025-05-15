import React from 'react'

const Modal = ({isOpen,onClose}) => {

    if(!isOpen) return null

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const modalStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        textAlign: 'center',
    }


  return (
    <div style={overlayStyle}>
        <div style={modalStyle}>
            <h2>Modal</h2>
            <p>Modal content goes here...</p>
            <button onClick={onClose}>Kapat</button>
        </div>

    </div>
  )
}

export default Modal