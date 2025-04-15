import { useEffect, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  
  useEffect(()=>{
    console.log(count)
  },[count])

  return (
    <>
      <h1>{count}</h1>
      
      <button onClick={()=>setCount(prev => prev+1)}>Increment</button>  
      {/* <button onClick={()=>setCount(prev => prev-1)}>Increment</button>   */}
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    

    </>
  )
}

export default App
