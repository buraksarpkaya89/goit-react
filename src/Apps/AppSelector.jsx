import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCounter, selectCounterStatus, selectIsActive } from '../ReduxStore/selectors/selectors'
import { decrement, increment, reset, toggleActive } from '../ReduxStore/slice/selectorSlice'

const AppSelector = () => {

  const dispatch = useDispatch()

  const counterValue = useSelector(selectCounter)
  const isActive = useSelector(selectIsActive)
  const history = useSelector((state) => state.selector.history)
  const counterStatus = useSelector(selectCounterStatus)

  return (
    <div>
      <h3>Selector Örnekleri</h3>
      <div>
        <h2>Temel Bilgiler</h2>
        <p>Sayaç Değeri : {counterValue}</p>
        <p>Durum : {isActive ? "True" : "False"}</p>
      </div>

      ---------
      <div>
        <h3>Bileşik Selector</h3>
        <p>Durum: {counterStatus.status} </p>
        <p>Pozitif mi: {counterStatus.isPositive ? "Evet" : "Hayır"}</p>
        <p>Yapılan İşlem Sayısı: {history.length}</p>
      </div>

      ---------
      <div>
        <h2>Son İşlemler</h2>
        <ul>
            {
              history.slice(-5).map((item,index) => (
                <li key={index}>
                  {item.type} - {item.value} - ({new Date(item.timestamp).toLocaleTimeString()})
                </li>
              ))
            }
        </ul>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>
          Arttır
        </button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
        <button onClick={() => dispatch(toggleActive())}>Durumu Değiştir</button>
        <button onClick={() => dispatch(reset())}>Reset</button>

      </div>
    </div>
  )
}

export default AppSelector