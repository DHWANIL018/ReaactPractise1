// Shree Ganeshay namah 
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount,increment,decrement } from '../../Features/counterSlice'
const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const count1 = useSelector((state) => state)
    console.log(count1)
  return (
    <>
    <div className='container text-center mt-5'>
        <h1>{count}</h1>
        <button className=' btn mx-4 btn-success' onClick={()=>dispatch(increment())} >Increment</button>
        <button className=' btn mx-4 btn-success'  onClick={()=>dispatch(decrement())}>Decrement by Value</button>
        <button className=' btn mx-4 btn-danger'  onClick={()=>dispatch(incrementByAmount(2))}>Increment By Value</button>
    </div>
    </>
  )
}

export default Counter