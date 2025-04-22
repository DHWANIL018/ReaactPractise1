import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { ShopContext } from './context/shopcontext'
import Header from './pages/Header'

function App() {
  
  const {count,setCount} = useContext(ShopContext)
  return (
   <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/about' element={<About/>}> 
      </Route>
    </Routes>
   </> 
  )
}

export default App
