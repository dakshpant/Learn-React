// eslint-disable-next-line no-unused-vars
import { useCallback, useState } from 'react'
import ChildComponent from './components/childComponent'
function App() {
  /* 
  The useCallback hook is used to save unnecessary rerendering of child components.
    // Advanced syntax
    const memoizedCallback = useCallback(callback, [dependency1, dependency2,...])
    // Basic syntax
    const memoizedCallback = useCallback(() => {
      //callback Logic
    },[dependency1, dependency2,...])
  */

    const [count, setCount] = useState(0)

    const handelClick = useCallback(()=>{
      setCount(count+1)
    }
  ,[])

  return (
    <>
    <h1>
      count :{count}
      </h1>
    <button 
    onClick={handelClick}>
      Increment
      </button>

    <br /><br />
    <div>
      <ChildComponent
       btnName="Click Me"
       handelClick={handelClick} 
       />
    </div>

    </>
  )
}

export default App

/* 
useMemo only momoizes the result i.e the return value of a function 
whereAs;
the useCallback hook momoizes the function itself

both the useMomo & callback hook stores the value as a cache and uses when needed 
*/