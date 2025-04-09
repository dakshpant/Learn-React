import { useNavigate } from "react-router-dom"
import React from 'react'

const Btn = () => {
  const navigate = useNavigate();
  return (
    <div>
       <h1>Home Page <br /> Navigate by Clicking on the Page Number</h1>
      <ul>
        <li>
          <button
          onClick={()=>navigate('./page1')}>Page1</button>
        </li>
        <li>
          <button
          onClick={()=>navigate('./page2')}>Page2</button>
        </li>
        <li>
          <button
          onClick={()=>navigate('./page3')}>Page3</button>
        </li>
        <li>
          <button
          onClick={()=>navigate('./page4')}>Page4</button>
        </li>
      </ul>
    </div>
  )
}

export default Btn