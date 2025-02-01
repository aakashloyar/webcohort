import {useState,useEffect} from 'react'


function App() {
  const [data,loading]=useData();
  const isOnline = useIsOnline(5);
  window.addEventListener("resize", handleResize);
  const mousePointer = useMousePointer();
  return (
    <>
    {!loading?data:"loading ..."}
    Your mouse position is {mousePointer.x} {mousePointer.y}
    {isOnline ? "You are online yay!" : "You are not online"}
    </>
  )
}

function handleResize() {
  console.log("Window resized!");
}


const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};



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


function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, [])

  return isOnline;
}


export default App