// eslint-disable-next-line no-unused-vars
import { useReducer, useRef, useState } from "react"
import Card from "./components/Card"
function App() {
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
    },
  ]

  const [mapped, setMapped] = useState(true)
  const [filtered, setFiltered] = useState(false)
  const [reduced, setReduced] = useState(false)

  const filteredDetails = details.filter(persone => persone.Age % 2 === 0)
  const reducedDetails = details.reduce((acc, persone) => {
    acc.push({
      ...persone,
      Age: persone.Age / 2
    })
    return acc
  }, [])

  // Filter
  // const filteredDetails = details
  // .filter(person => person.Age % 2 === 0)
  // .map(person => ({
  //   ...person,
  //   Age: person.Age
  // }))

  // Reduce
  // const reduceAge = details.reduce((acc, person) => {
  //     acc.push({
  //       ...person,
  //       Age: person.Age / 2
  //     })

  //   return acc
  // }, [])

  //  const filterCards = () => {
  //   {filteredDetails.map((details, index) => (
  //     <Card key={index} name={details.Name} age={details.Age} />
  //   ))}
  //  }



  return (
    <>
      {/* Map */}
      {/* <div
        className="flex gap-2">
        {details.map((details, index) => (
          <Card key={index} name={details.Name} age={details.Age} />
        ))}
      </div> */}

      {
        mapped && <div
          className="flex gap-2">
          {details.map((details, index) => (
            <Card key={index} name={details.Name} age={details.Age} />
          ))}
        </div>
      }

      {filtered &&
        <div className="flex gap-2 mt-5">
          {filteredDetails.map((details, index) => (
            <Card key={index} name={details.Name} age={details.Age} />
          ))}
        </div>
      }

      {
        reduced &&
        <div className="flex gap-2">
          {reducedDetails.map((details, index) => (
            <Card key={index} name={details.Name} age={details.Age} />
          ))}
        </div>
      }


      <div className="mt-10 flex justify-center items-center gap-3">
        <button
          onClick={
            () => {
              setFiltered(!filtered)
              setMapped(false)
              console.log('jo gaya h');
              setReduced(false)
            }
          }
          className="w-50 py-2 text-2xl border border-black hover:bg-blue-500 hover:text-white hover:text-3xl">Filter</button>
        <br />
        <button
          onClick={
            () => {
              setReduced(!reduced)
              setMapped(false)
              setFiltered(false)

            }

          }
          className="w-50 py-2 text-2xl border border-black hover:bg-blue-500 hover:text-white hover:text-3xl">Reduce</button>
      </div>

      {
        /* Filter by evan age
        <div className="flex gap-2">
          {filteredDetails.map((details, index) => (
            <Card key={index} name={details.Name} age={details.Age} />
          ))}
        </div>
  
        <div className="flex gap-2">
          {reduceAge.map((details, index) => (
            <Card key={index} name={details.Name} age={details.Age} />
          ))}
        </div> */
      }
    </>
  )
}
//filter : even age
//reduce: age/2
export default App
