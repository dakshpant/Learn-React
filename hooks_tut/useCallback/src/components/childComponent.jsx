import React from "react";

const ChildComponent = React.memo(
  (props) =>{
    console.log('Child Component Got Re-rendered');
    
    return (
      <div>
        <button 
        onClick={props.handelClick}>
          {props.btnName}
        </button>
      </div>
    )
  }
)
export default ChildComponent