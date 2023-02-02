import { useState } from 'react'
import Login from './components/login/login'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-img">
      <Login />
    </div>
  )
}

export default App
