import {useState,useEffect} from 'react'


function App() {
  const [data,loading]=useData();
  return (
    <>
    {!loading?data:"loading ..."}
    </>
  )
}

function useData() {
  const [data,setData]=useState();
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setLoading(true)
      setData(Math.random())
      
      setLoading(false)
    },2000);
  },[])
  return [data,loading];
}
export default App