import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/navbar'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Game from '../pages/game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/game' element={<Game />}/>
    </Routes>
    </>
  )
}

export default App
