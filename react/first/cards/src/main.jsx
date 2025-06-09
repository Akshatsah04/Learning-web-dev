import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Format from './stur.jsx'

createRoot(document.getElementById('root')).render(
  <div className='con'>
    <Format 
      title="HardWired"
      image= "https://iili.io/3lFrrQ9.md.jpg"
      date="5 April"
      year= "2025"
      description= "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development."
      
    />
    <Format 
      title= "Artemis: Mental Health Check-In"
      image= "https://iili.io/3lFrvkl.md.jpg"
      date="5 April"
      year= "2025"
      description= "An empowering session dedicated to mental wellness, offering tools and strategies to manage stress, build resilience, and maintain balance in today's fast-paced world."
      
    />
    <Format 
      title= "Pandora: AR/VR Workshop for Innovators"
      image= "https://iili.io/3lFrPEu.md.jpg"
      date="5 April"
      year= "2025"
      description= "Step into the immersive world of AR/VR, where participants will create and experiment with technologies reshaping industries and experiences."
      
    />
    <Format 
      title="Binary Bloom: Web3 Development Indulgence"
      image= "https://iili.io/3lFrk74.md.jpg"
      date="5 April"
      year= "2025"
      description= "Delve into blockchain and Web3, learning to create decentralized solutions that are set to transform industries and everyday life."
      
    />
  </div>
)
