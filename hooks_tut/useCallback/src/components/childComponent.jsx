import React from 'react'
import { useState,useMemo } from 'react'


const ChildComponent = React.memo(   
(props) => {
    console.log('Child Component got re-rendered');
    
  return (
    <div>
        <button onClick={props.handelClick}>
        {props.buttonName}
        </button>
    </div>
  )
}
)
export default ChildComponent