import { useState } from 'react'
import './App.css'
import Register from './components/loginpage/login.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register />
    </>
  )
}

export default App
