import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountContext from './Context.jsx';
import { useContext } from 'react';
function App() {
  const [count, setCount] = useState(0)
  console.log('App');
  return (
    <>
    <CountContext.Provider value={count}>
      hi
      <button onClick={()=>setCount(count+1)}>Click me</button>
      <Hello/>
    </CountContext.Provider>

    </>
  )
}
function Hello() {
  const count=useContext(CountContext);
  console.log('hello');
  const [temp,setTemp]=useState(0);
  return (
    <>
    <p>{temp}</p>
    <button onClick={()=>setTemp(temp+1)}>Click me</button>
    <p>{count}</p>
    </>
  )

}

export default App
