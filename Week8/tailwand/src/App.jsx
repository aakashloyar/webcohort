import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{backgroundColor:'red'}}>Hello </div>
    <div style={{backgroundColor:'red'}}>my </div>
    <div style={{backgroundColor:'red'}}>Boy </div>
    </div> */}
    <div className='flex justify-between'>
    <div style={{backgroundColor:'red'}}>Hello </div>
    <div style={{backgroundColor:'red'}}>my </div>
    <div style={{backgroundColor:'red'}}>Boy </div>
    </div>
    
    </>
  )
}

export default App
