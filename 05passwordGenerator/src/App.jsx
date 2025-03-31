import { useState } from 'react'
import { useState } from 'react'


function App() {
 const [length, setLenght] = useState(8)
 const [numberAllowed, setNumberAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [Password, setPassword] = useState("")
  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
