import { useState } from 'react'
import Login from './components/login/login'
import BGIMG from './assets/images/svg/bg-login-digiform.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-img-login bg-no-repeat bg-cover'>
      < Login />
    </div >
  )
}

export default App
