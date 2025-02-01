import {useEffect,useState} from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 1);// 500 milliseconds debounce delay
  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
     <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    {debouncedValue}
    {count}
    </>
   

  )
}
function useDebounce(value,n) {
  const [a,seta]=useState(value);
  useEffect(()=>{
    const samay=setTimeout(()=>{
      seta(value);
    },n*1000);
    return ()=>{
      clearTimeout(samay);
    }
  },[value,n]);
  
  return a;
}

const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
};

export default App