// Shree Ganeshay namah 
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h1>Home</h1>

        <NavLink to={'/about'}>About</NavLink>
    </>
  )
}

export default Home