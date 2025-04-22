// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Alert from './components/Alert/Alert'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  let number = 10
  let number1 = 15
  const arrayNumber = [1, 2, 3, 4]

  let cinsiyet = "kadın"

  return (
    <>
      {/* <div className='content' >
      <div><Content elma = {number} test = "bu bir testtir" arrayNumber= {arrayNumber}/></div>
      <div><Content elma = {number1} test = "bu bir test2dir" arrayNumber= {arrayNumber}/></div>
    </div>
       */}


      {/* <Footer>
        <div>
          <div>a</div>
          <div>b</div>

        </div>
      </Footer> */}


      {
        cinsiyet === "erkek" ?
          <Alert error="blue">
            olumlu mesajı
          </Alert>
          :
          <Alert error="red">
            hata mesajı
          </Alert>
      }



      {/* <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert> */}
    </>
  )
}

export default App
