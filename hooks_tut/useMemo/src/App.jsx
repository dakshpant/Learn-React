import { useMemo } from 'react';
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [input,setInput] = useState(0)

  function expensiveTask(num){
    console.log("Inside Expensive task");
    for (let i = 0; i < 1000000000; i++) {
    }
    return num*2
  }
  let doubleValue = expensiveTask(input)


  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>  
        <div>
          count:{count}
        </div>
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a number' name="" id="" />
        double :{doubleValue}
      </div>
    </>
  )
}

export default App
