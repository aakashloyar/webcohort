import {useRecoilState,useRecoilValue,useSetRecoilState,RecoilRoot} from 'recoil'
import {countState,isEven,Adq,Todofamily} from './store/atoms/count'
import './App.css'

function App() {
  console.log('App');
  return (
    <>
    <RecoilRoot>
      hello
      <Show/>
      <Hi/>
      <Hello/>
    </RecoilRoot>
   
    </>
  )
}
function Show() {
  const count=useRecoilValue(countState);
  const even=useRecoilValue(isEven);
  //const res=useRecoilValue(Adq);
  console.log('show');
  return (
    <>
    <Todo id={1}/>
    <Todo id={2}/>
    <Todo id={2}/>
    <Todo id={3}/>
    {/* {even?<p>Even</p>:<p>Odd</p>}
    <p>{count}</p> */}
    {/* <p>{res}</p> */}
    </>
  )
}
function Hi() {
  const setCount=useSetRecoilState(countState);
  console.log('Set');
  return (
    <>
    <button onClick={()=>setCount((prev)=>prev+1)}>Click me</button>
    </>
  )
}
function Hello() {
  const [count,setCount]=useRecoilState(countState);
  console.log('both');
  return (
    <>
    <button onClick={()=>setCount(count+1)}>Click me</button>
    </>
  )
}
function Todo({id}) {
  const todo=useRecoilValue(Todofamily(id));
  console.log(todo);
  console.log('todo');
  return (
    <>
    <p>{todo.title}</p>
    <p>{todo.completed}</p>
    </>
  )
}

export default App
