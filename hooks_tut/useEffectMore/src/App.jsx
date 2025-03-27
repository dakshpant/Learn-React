import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState('posts')

  const [items, setItems] = useState([]);

  useEffect(() => {
    // console.log(resourceType);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handelResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handelResize);
  })

  return (
    // <>
    //   <div>
    //     <button onClick={() => setResourceType('posts')}>Post</button>
    //     <button onClick={() => setResourceType('users')}>User</button>
    //     <button onClick={() => setResourceType('comments')}>Comments</button>
    //   </div>
    //   <h1>{resourceType}</h1>
    //   {
    //     items.map
    //       (
    //         items => {
    //           return <pre>{JSON.stringify(items)}</pre>
    //         }
    //       )
    //   }
    // </>
    <div>
      Window Width : {windowWidth}
    </div>
  )
}

export default App
