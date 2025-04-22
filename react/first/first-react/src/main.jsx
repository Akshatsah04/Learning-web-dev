import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function MainContain(){
  return <h1>react is great</h1>
}

const root =createRoot(document.querySelector("#root"))

const reactElement = <h2>hello world 2</h2>

// root.render(<h1>hello world</h1>)
// root.render(reactElement)

root.render(
  <div>
    <MainContain />
  </div>
)
