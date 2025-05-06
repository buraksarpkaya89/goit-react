import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [name, setName] = useState(false);

    // useEffect(() => {
    //     console.log("tıklandı");
    //     document.title = `You clicked ${clicks} times`;
    // });

    // useEffect(() => {
    //     console.log("tıklandı");
    //     document.title = `You clicked ${clicks} times`;
    // },[]);

    // useEffect(() => {
    //     console.log("tıklandı");
    //     document.title = `You clicked ${clicks} times`;
    // },[clicks,name]);

    // useEffect(() => {
    //     setInterval(() => {
    //       console.log(`Interval - ${new Date}`);
    //     }, 2000);
    //   }, []);

    // useEffect(() => {
    //     console.log("Effect");

    //     return () => {
    //         console.log("Clean up");
    //     };
    // });

    // useEffect(() => {
    //     // Aralığın kimliğini bir değişkende saklıyoruz
    //     const intervalId = setInterval(() => {
    //         console.log(`Interval - ${new Date}`);
    //     }, 2000);

    //     return () => {
    //         // Aralığı kimliğine göre temizliyoruz 
    //         clearInterval(intervalId);
    //     };
    // }, []);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("3 saniye geçti");
    //     },3000)
    //     return () => clearTimeout(timer)
    // })
    const [clicks, setClicks] = useState(() => {
        // Anahtar ile değeri okuyoruz
      const savedClicks = window.localStorage.getItem("saved-clicks");
        console.log(savedClicks);
        // Eğer burada bir değer varsa, bunu
      // durumun başlangıç değeri olarak döndürüyoruz
      if (savedClicks !== null) {
        return savedClicks;
      }
    
        // Aksi takdirde varsayılan bir değer döndürüyoruz
      return 0;
    });

    console.log(clicks);
    // useEffect(() => {
    //     window.localStorage.setItem("saved-clicks", clicks);
    // }, [clicks]);

    
    

    return (
        <div>
            <button onClick={() => setClicks(clicks + 1)}>
                You clicked {clicks} times
            </button>
            <p>{clicks}</p>
            <button onClick={() => setName(!name)}>Name</button>
        </div>

    )
}

export default Effect