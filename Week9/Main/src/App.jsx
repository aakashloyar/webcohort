import React, { useState, useEffect } from 'react';


function App() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setLoading(r=>!r);
    },5000);
  },[])
  return (
    <>
    Hi
    {loading?<MyComponentF/>:<MyComponentC/>}
    </>
  )
}

function MyComponentF() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log('func comp mounted')
    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log('func comp unmounted')
      
    };
  }, []);
  return (
    <>
    Hi functional comp
    </>
  )

  // Render UI
}


class MyComponentC extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("class component mounted")
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("class component unmounted")
  }

  render() {
    // Render UI
    return (
      <>
      Hi Class comp
      </>
    )
  }
}

export default App