import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementFive, toggleActive } from '../../ReduxStore/slice/counterSlice';

const CounterDisplay = () => {
    

    const count = useSelector((state) => state.counterValue.value)
    const isActive = useSelector((state) => state.counterValue.isActive)
    const dispatch = useDispatch()
    // console.log(isActive);

    // const color = useSelector((state) => state.colorValue)
    // console.log(color);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
                <span style={{ fontSize: "30px" }}>{count}</span> -
                <span style={{ fontSize: "30px" }}>{isActive ? "Aktif" : "Pasif"}</span>

            </div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementFive())}
                >
                    5 Arttır
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(toggleActive())}
                >
                    Durumu değiştir
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(2))}
                >
                    2 arttır
                </button>
                
            </div>
        </div>
    )
}

export default CounterDisplay