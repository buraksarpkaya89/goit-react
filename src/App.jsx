// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './App.css'
import Alert from './components/Alert/Alert'
import Content from './components/Content'
import Footer from './components/Footer'
import NewComp from './components/NewComp'
import OnclickComp from "./components/OnclickComp"
import Sayac from './components/Sayac'
import Users from './components/Users'
import Student from './components/Student'
import Effect from './components/Effect'
import Post from './components/Post'
import Forms from './components/Forms/Forms'
import TodoHeader from './components/TodoApp/TodoHeader'
import TodoForm from './components/TodoApp/TodoForm'
import TodoList from './components/TodoApp/TodoList'
import FormikApp from './components/FormikExmple/FormikApp'
import SignUpFormik from './components/FormikExmple/SignUpFormik'
import SurveyFormik from './components/FormikExmple/SurveyFormik'

function App() {
  // const [count, setCount] = useState(0)

  const [isOpen, setIsOpen] = useState(false)
  // const handleClick1 = () => {
  //   setIsOpen(!isOpen)
  // }

  let number = 10
  let number1 = 15
  const arrayNumber = [1, 2, 3, 4]

  let cinsiyet = "kadın"

  // useEffect(() => {
  //   console.log("Effect");

  //   return () => {
  //     console.log("Clean up");
  //   };
  // });
  // const [data,setData] =useState({})

  // const handleLogin = (userData) => {
  //   // Verilerle gerekli işlemleri yapıyoruz
  //   setData(userData);
  // };

  const [todos, setTodos] = useState([])
  const [searhText, setSearchText] = useState("")

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searhText.toLowerCase()))
  // console.log(todos);

  return (
    <>
      <SurveyFormik />
      {/* <SignUpFormik /> */}
      {/* <FormikApp/> */}

      {/* <TodoHeader searhText={searhText} setSearchText={setSearchText}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList filteredTodos={filteredTodos} deleteTodo={deleteTodo}/> */}
      {/* <Forms handleLogin= {handleLogin}/> */}
      {/* <Post data={data}/> */}
      {/* <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && <Effect />}
      </div> */}

      {/* <Effect /> */}

      {/* <Student/>
      <Users/>
      <Sayac/> */}

      {/* <NewComp isOpen={isOpen} setIsOpen={setIsOpen} handleClick1={handleClick1} />
      <OnclickComp isOpen={isOpen} setIsOpen={setIsOpen} handleClick1={handleClick1} /> */}
      {/* <OnclickComp message="Playing music!" >
        Play
      </OnclickComp>
      <OnclickComp message="Uploading your data!" >
        Upload data
      </OnclickComp> */}
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


      {/* {
        cinsiyet === "erkek" ?
          <Alert error="blue">
            olumlu mesajı
          </Alert>
          :
          <Alert error="red">
            hata mesajı
          </Alert>
      } */}



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
