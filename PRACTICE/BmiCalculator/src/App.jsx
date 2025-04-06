import { useState } from 'react'


function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('please enter a valid weight and height')
    }
    else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      if (bmi < 25) {
        setMessage('You are UnderWeight')
      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a Healthy Weight Persone')
      }
      else {
        setMessage('you are OverWeight Persone')
      }
    }
  }
  //reload
  let reload = ()=>{
    window.location.reload()
  }

  return (
    <>
      <div className='App'>
        <div className='container'>
          <h2>BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label htmlFor="weight">Weight(lbs)</label>
              <input
                type="tel"
                name="weight"
                id="weight"
                placeholder='Enter your Weight'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="height">Height(In)</label>
              <input
                type="tel"
                name="height"
                id="height"
                placeholder='Enter your HEight'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <button className='btn' type='submit' >Submit</button>
              <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
            </div>
            <div className='center'>
              <h3>Your BMI IS:{bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
