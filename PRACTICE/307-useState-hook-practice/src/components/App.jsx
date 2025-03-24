import React from "react";
import { useState } from "react";
function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

 function updateTime(){
  const newTime = new Date().toLocaleTimeString();
  setTime(newTime);
 }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime} >Get Time</button>
    </div>
  );
}

export default App;
