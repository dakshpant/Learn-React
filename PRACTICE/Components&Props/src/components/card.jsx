import React from "react";


function Card(props) {
  return (
    <div className="max-w-xs p-6 rounded-lg shadow-md bg-black">
        <img className="w-75 object-cover object-center  rounded-md h-75 bg-gray-500" src={props.img} alt="cardImage" />
        <div className="">
            <span className="pt-4 block text-lg font-large tracking-widest uppercase text-indigo-400 text-left">{props.name}</span>
            <h2 className="text-left text-white text-md font-medium">{props.details}</h2>
        </div>
    </div>
  )
}

export default Card