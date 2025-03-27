import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // Example 1
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // console.log(resourceType);
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [resourceType])

// ===================================================================================================================

  // Example 2

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handelResize = () => {
  //   setWindowWidth(window.innerWidth);
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', handelResize);
  // })

  // ===================================================================================================================

  // Example 3

  useEffect(()=>{
    console.log(`Resource Changed`);

    //CleanUp Function
    return () => {
      console.log(`Return from resource change`);
      
    } 
  },[resourceType])

  // ===================================================================================================================

  return (

    // Example 1 and 3
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Post</button>
        <button onClick={() => setResourceType('users')}>User</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {
        items.map
          (
            items => {
              return <pre>{JSON.stringify(items)}</pre>
            }
          )
      }

{/* // =================================================================================================================== */}
{/* Example 2 */}
    </>
    // <div>
    //   Window Width : {windowWidth}
    // </div>
  )
}

export default App