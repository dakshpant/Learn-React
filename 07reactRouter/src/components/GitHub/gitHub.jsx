import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

const Github = () => {
  // const [data , setData]  = useState([])  
  // useEffect(() => {
  //     fetch('https://api.github.com/users/dakshpant')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })
  // },[])

  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
        GitHub Followers :{data.followers}

        <img className='rounded-full' src={data.avatar_url} alt="Image" width={250}/>
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {

  const  response = await fetch('https://api.github.com/users/dakshpant')
  return response.json(); 

}