import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Main from './components/Main'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import {Routes, Route} from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/add' exact = {true} element= {<Form/>}/>
        {/* <Form/> */}
        <Route path='/' exact = {true} element= {<Main/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
