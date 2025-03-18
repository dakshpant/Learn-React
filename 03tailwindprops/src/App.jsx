import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "Daksh",
    age : 20
  }
let myArr = [1, 2, 3, 4, 5]

  return (
    <>
    <h1 className='bg-green-500 mb-5'>Tailwid Test</h1>

    <Card username='chaiaurcode' price={200} />
    <Card username='daksh' /> 
    </>
  )
}

export default App
