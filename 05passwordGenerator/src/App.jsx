import { useEffect } from 'react'
import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) {
        str += "0123456789"
      }
      if (charAllowed) {
        str += "!@#$%^&*~[]{}()_+"
      }
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    }
    , [length, numberAllowed, charAllowed, setPassword]
  )
  useEffect(() => {
    passGenerator()
    // setPassword(pass)
  }, [length, numberAllowed, charAllowed, passGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600'>
        <h1 className='pb-1 text-2xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-4 bg-white'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none px-3 py-1 shrink-0 bg-blue-600 text-white'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label className='text-white'>Length:{length}</label>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInputs">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInputs">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
