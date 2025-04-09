import React from 'react'
import { useNavigate } from 'react-router-dom'
const Page1 = () => {
   const navigate = useNavigate()
  return (
    <div>
        <h1>page1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatibus quos! Praesentium id vel aperiam!</p>
        <button 
    onClick={()=>navigate(-1)}>Navigate Back</button>
    </div>
  )
}

export default Page1