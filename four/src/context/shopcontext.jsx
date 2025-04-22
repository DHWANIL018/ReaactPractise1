// Shree Ganeshay namah 

import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext()

const ShopContextProvider = ({children}) => {
    const [count, setCount] = useState(0)
    // console.log(props)
    // console.log(props.children)
    const currency = "$"
    
    
 
    const value = {
        name  : "Dhwanil",count, setCount,currency
    }

    
    
  return (
    <>
    <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
    </>
  )
}

export default ShopContextProvider