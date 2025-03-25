import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

// CONVENTIONAL METHOD
// const increaserCount = () => {
//   setCount(count + 1)
//   console.log(count);
  
// }
// const decreaseCount = () => {
//   setCount(count - 1)
// }

// USING SWITCH CASE
// const manageCount = (e) => {z
//  switch (e.target.value) {
//    case 'increase':
//     setCount(count + 1)
//     break;
//    case 'decrease':
//     setCount(count - 1)
//     break;
//    default:
//  }
// }


// e.target.id === 'Inc' ? setCount(count + 1) : setCount(count - 1)
// USING TERNARY OPERATOR
// const manageCount = (e) =>{
  // e.target.id ==="Inc" ? setCount(count+1) :setCount(count-1)
  //setCount(prevCount => e.target.id ==="Inc" ? setCount(count+1) :setCount(count-1))
  //console.log(setCount(prevCount => e.target.id ==="Inc" ? setCount(count+1) :setCount(count-1)));
  // console.log(prevCount);  
// }
// USING CALL BACK FUNCTION
const manageCount = (e) => {
  setCount(prevCount => {
    const newCount = e.target.id === "Inc" ? prevCount + 1 : prevCount - 1;
    console.log("Previous Count:", prevCount, "Updated Count:", newCount);
    return newCount;
  });
};


  return (
    <>
    <div className='flex justify-center items-center mx-auto flex-col mt-70 bg-slate-50'>
    <h1 className='text-4xl text-center'>Counter {count}</h1>
    <button onClick={manageCount} value='increase' id='Inc' className='text-4xl text-center border w-10 rounded-full bg-green-50 hover:bg-green-700 my-2'>+</button>
    <button onClick={manageCount} value='decrease' id='Dec' className='text-4xl text-center border w-10 rounded-full bg-red-50 hover:bg-red-700'>-</button>
    </div>
    </>
  )
}

export default App
