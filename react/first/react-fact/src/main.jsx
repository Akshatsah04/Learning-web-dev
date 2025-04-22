import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div>
     <Head />
     <Main />
     <Foot />
  </div>
)


function Main(){
  return (
    <main>
    <ul>
      <li>was first release in 2013</li>
      <li>was originally created by jordan walker</li>
      <li>was well over 200k stars on github</li>
      <li>is maintained by meta</li>
      <li>powers thousands of enterprise apps , including mobile apps</li>
    </ul>
  </main>

  )
}
function Head(){
  return (
    <header>
    <img src="/src/image.png" width="40px" alt="" />
    <h1>Fun fact about react</h1>
    
  </header>

  )
}
function Foot(){
  return (
    <footer>
    <p>develop by akshat</p>
  </footer>

  )
}