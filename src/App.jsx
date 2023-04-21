import { Route, Routes } from 'react-router-dom'
import './styles/main.css'
import {HeroPage} from './components/HeroPage'
import {Login} from './components/Login'
import { SignIn } from './components/Sign-in'
import {ContactPage} from './components/ContactPage'

import { useEffect, useState } from "react";
import { tasks as data} from "./data/tasks";



function App() {

  const [tasks, setTasks] = useState([]);

   useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <Routes>
        <Route path='/prueba' element={<HeroPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sing-in' element={<SignIn/>} />
        <Route path='/' element={<ContactPage tasks={tasks}/>}/>
      </Routes>  
    </>
  )
}

export default App
