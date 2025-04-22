// Shree Ganeshay namah 

import React, { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'

const About = () => {

    const {name,count,setCount,currency} = useContext(ShopContext)



  return (
    <>
    <div>Cart {count}</div>
    <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>{currency}</h1>
    </>
  )
}

export default About