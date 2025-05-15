import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import useToggle from '../hook/useToggle';
import Modal from '../components/Modul4L2/Modal';

const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

const AppHook = () => {
    const [value, setValue] = useState(0);
    const btnRef = useRef();
    const inputRef = useRef();
    const {isOpen, open, close} = useToggle();
    console.log("isopen:",isOpen);


    // İlk render işleminde undefined olacaktır
    // ve sonraki tüm işlemler için DOM öğesine bir referans
    console.log("App: ", btnRef.current);
    useEffect(() => {
        // Efekt montajdan sonra gerçekleştirilir,
        // böylece her zaman bir DOM öğesine referans olacaktır
        console.log("useEffect: ", btnRef.current);
    });

    const handleClick = () => {
        // Tıklamalar montajdan sonra olacaktır,
        // böylece her zaman bir DOM öğesine referans olacaktır
        console.log("handleClick: ", btnRef.current);
        btnRef.current.style.backgroundColor = "red";
       
        inputRef.current.focus();
        inputRef.current.value = "Hello World";
        inputRef.current.style.backgroundColor = "yellow";
    };

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={() => setValue(value + 1)}>
                Update value to trigger re-render
            </button>
            <button ref={btnRef} onClick={handleClick}>
                Button with ref
            </button>
            {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}

            <button onClick={open}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={close} />
        </div>
    )
}

export default AppHook