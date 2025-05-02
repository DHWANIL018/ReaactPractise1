import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Route,Routes} from 'react-router-dom' 
import Counter from './pages/counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Counter/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
