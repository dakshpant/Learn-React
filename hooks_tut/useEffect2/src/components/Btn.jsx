import React from 'react';
import { useState ,useEffect } from 'react'

const BtnEffect = () => {

    const [trigger, setTrigger] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        await fetch("https://dummyjson.com/test")
        .then(res => res.json())
        .then(data => setData(data))
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <div>
            <button onClick={() => setTrigger(!trigger)}>Click Me</button>
           {trigger? <pre>{JSON.stringify(data, null, 2)}</pre> : null} 
           {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    )
}

export default BtnEffect