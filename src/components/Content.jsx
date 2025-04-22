import React from 'react'
import './Content.css'

const Product = () => {
    return (
      <div>
        <h2>Cookies</h2>
              <p>Price: 999 credits</p>
      </div>
    );
};

const Content = ( props ) => {
    console.log(props);
    return (
        <div>
            {
                props.elma === 15 && <div style={{backgroundColor:"red"}}> {props.elma === 15 ? "onbeş" : "on"}</div>
            }

            {
                props.arrayNumber.length !== 0 ? props.arrayNumber.map((item,index) => {
                    return(
                        <ul key={index}>
                            <li className='deneme'>{item}</li>
                        </ul>
                    )
                })
                :
                <p>veri yok</p>
            }

            <h1> {props.test}</h1>
            <Product/>
        </div>

    )
}

export default Content