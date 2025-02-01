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


    <div className='grid grid-cols-2'>
    <div className='bg-red-500'>Hello </div>
    <div className='bg-green-300'>my </div>
    <div className='bg-yellow-900'>Boy </div>
    </div>

    {/* unequal size */}
    <div className='grid grid-cols-10'>
    <div className='bg-red-500 col-span-4'>Hello </div>
    <div className='bg-green-300 col-span-4'>my </div>
    <div className='bg-yellow-900 col-span-2'>Boy </div>
    </div>

    {/* responsiveness */}
    <div>
    <div className='bg-red-500 sm:bg-green-100 lg:bg-yellow-600 2xl:bg-black-300'>Hello </div>
  
    </div>

    </>
  )
}

export default App
