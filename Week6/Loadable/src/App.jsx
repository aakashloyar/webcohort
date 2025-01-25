import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot,useRecoilStateLoadable} from 'recoil'
import {countState} from './store/atoms/count'
function App() {
  return (
    <>
    <RecoilRoot>
      <Show/>
    </RecoilRoot>
    </>
  )
}

function Show() {
  const [count,setCount]=useRecoilStateLoadable(countState);
  //console.log(count)
  //console.log(count.contents)
  //console.log(count.state)
  //console.log(count.state);
  // return (
  //   <>
  //    <p>{count.contents}</p>
  //   </>
  // )
  if (count.state === 'hasValue') {
    return (
      <>
        <p>{count.contents}</p>
      </>
    );
  } else if (count.state === 'loading') {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <p>Error: {count.contents}</p>
      </>
    );
  }
}
export default App
