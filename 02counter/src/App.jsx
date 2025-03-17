import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 5

  const addValue = () => {
    if (counter >= 20) {
      setCounter(counter = 20)
    }
    else {
      // counter++
      setCounter(counter++)
    }
  }
  const decreaseValue = () => {
    if (counter <= 0) {
      setCounter(counter = 0)
    }
    else {
      // counter--
      setCounter(counter--)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Chai Count: {counter}</h3>
      <button id='addValue' onClick={addValue}>add value</button>
      <br />
      <br />
      <button id='deleteValue' onClick={decreaseValue}>delete value</button>
    </>
  )
}

export default App
