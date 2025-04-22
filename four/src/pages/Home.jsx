// Shree Ganeshay namah 

import React, { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'

const Home = () => {

    const {name,count,setCount} = useContext(ShopContext)
    console.log(name)
    
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    <div>{name}</div>
    {/* <div>{count}</div> */}
    </>
  )
}

export default Home