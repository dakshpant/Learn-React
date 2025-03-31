import React, {  useState,useEffect } from 'react'

const BtnEffect= () => {

    const [trigger, setTrigger] = useState(false);  
    const [data, setData] = useState(null);

    const fetchData = async () => {
        await fetch('https://dummyjson.com/test')
        .then(response => response.json())
        .then(json => setData(json))

       
    }

    useEffect(() => {
        console.log(`helo world ${trigger}`);
        fetchData()
    },[trigger])

  return (
    <div>
        <button onClick={() => setTrigger(!trigger)}>Click Me </button>
        {
            trigger ? <pre>{JSON.stringify(data, null, 2)}</pre>:null
        }
    </div>
  )
}

export default BtnEffect