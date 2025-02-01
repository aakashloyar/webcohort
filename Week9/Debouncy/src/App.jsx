import {useEffect,useState} from 'react'


function App() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 1); // 500 milliseconds debounce delay

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


export default App