import React, { useState } from 'react'
import Card from "./components/Card"
function App2() {
    const details = [
        {
            Name: "A",
            Age: 10
        },
        {
            Name: "B",
            Age: 12
        },
        {
            Name: "C",
            Age: 13
        },
        {
            Name: "D",
            Age: 19
        },
        {
            Name: "E",
            Age: 20
        },
        {
            Name: "F",
            Age: 25
        },
        {
            Name: "G",
            Age: 22
        },]

    const [viewCard, setViewCard] = useState('map')

    const filteredDetails = details.filter(persone => persone.Age % 2 === 0)
    const reducedDetails = details.reduce((acc, persone) => {
      acc.push({
        ...persone,
        Age: persone.Age / 2
      })
      return acc
    }, [])


    return (
        <div>

            {
                viewCard === 'map' && <div
                    className="flex gap-2">
                    {details.map((details, index) => (
                        <Card key={index} name={details.Name} age={details.Age} />
                    ))}
                </div>
            }
            {
                viewCard === 'filter' && <div className="flex gap-2 mt-5">
                {filteredDetails.map((details, index) => (
                  <Card key={index} name={details.Name} age={details.Age} />
                ))}
              </div>
            }
            {
                viewCard === 'reduce' && <div className="flex gap-2 mt-5">
                {reducedDetails.map((details, index) => (
                  <Card key={index} name={details.Name} age={details.Age} />
                ))}
              </div>
            }


            <div className="mt-10 flex justify-center items-center gap-3">
                <button
                onClick={()=>setViewCard('filter')}
                    className="w-50 py-2 text-2xl border border-black hover:bg-blue-500 hover:text-white hover:text-3xl">Filter</button>
                <br />
                <button
                onClick={()=>setViewCard('reduce')}
                    className="w-50 py-2 text-2xl border border-black hover:bg-blue-500 hover:text-white hover:text-3xl">Reduce</button>
            </div>
        </div>
    )
}

export default App2