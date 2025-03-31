import React, { useEffect } from 'react'

const Button = () => {

    const [trigger, setTrigger] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(`helo world ${trigger}`);
        
    },[trigger])

    return (
        <div>
            <button onClick={() => setTrigger(!trigger)}>Click</button>
        </div>
    )
}

export default Button