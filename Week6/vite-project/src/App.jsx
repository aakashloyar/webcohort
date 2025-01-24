import { memo,useState ,useEffect,useCallback,useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [check, setCheck] = useState(0)
  function lele() {
    setCount(count+1);
    console.log('lele');
    //return 1;//cannot do this bcz now this is not a function but a number
  } 
  const Temp=useCallback(()=> {
    console.log('temp');
  } ,[count])
  // function Temp() {
  //   console.log('temp');
  // }

  let res=useMemo(()=>{
    console.log("sum")
    for(let i=0;i<check;i++) res+=i;
  },[check])

  
  useEffect(()=>{
    console.log('useeffect');
  },[count]);
  return (
    
    <>
      Hello
      <button onClick={lele}>Click me</button>
      <Call/>
      <p>{count}</p>
      <p>{res}</p>
    </>
  )
}
const Call=memo(()=>{
  console.log('call');
  return (
    <>
    <p>Hello guys</p>
    </>
  )
  })


export default App
