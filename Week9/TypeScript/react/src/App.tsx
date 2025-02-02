import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Todo{
  title:string,
  description:string
}
const todo:Todo[]=[
  {
    title:"play",
    description:"football"
  },
  {
    title:"play",
    description:"football"
  }

]
function App() {
  
  
  return (
    <>
    {todo.map((todos:Todo)=>{
      return <Rend todos={todos}/>
    })}
    </>
  )
}

function Rend({todos}:{todos:Todo}) {
  return (
    <>
    <div>{todos.title}</div>
    <div>{todos.description}</div>
    </>
  )
}

export default App
