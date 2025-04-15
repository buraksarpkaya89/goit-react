// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  let number = 10
  let number1 = 15
  const arrayNumber = [1,2,3,4]

  return (
    <>
    <div className='content' >
      <div><Content elma = {number} test = "bu bir testtir" arrayNumber= {arrayNumber}/></div>
      <div><Content elma = {number1} test = "bu bir test2dir" arrayNumber= {arrayNumber}/></div>
    </div>
      
      

      <Footer/>
    </>
  )
}

export default App
