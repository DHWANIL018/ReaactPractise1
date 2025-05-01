import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css'
import GoogleAuth from './pages/GoogleAuth'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/google' element={<GoogleAuth/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
