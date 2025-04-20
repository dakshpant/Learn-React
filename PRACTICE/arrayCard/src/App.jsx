import Card from "./components/Card"
function App() {
  const details = [
    {
      Name:"A",
      Age:10
    },
      {
        Name:"B",
        Age:12
      },
      {
        Name:"C",
        Age:13
      },
      {
        Name:"D",
        Age:19
      },
      {
        Name:"E",
        Age:20
      },
      {
        Name:"F",
        Age:25
      },
      {
        Name:"G",
        Age:22
      },
  ]

  // Filter
  const filteredDetails = details
  .filter(person => person.Age % 2 === 0)
  .map(person => ({
    ...person,
    Age: person.Age
  }))

  // Reduce
  const reduceAge = details.reduce((acc, person) => {
      acc.push({
        ...person,
        Age: person.Age / 2
      })
      
    return acc
  }, [])

  

  return (
    <>
    {/* Map */}
    <div className="flex gap-2">
     {details.map((details, index) => (
        <Card key={index} name={details.Name} age={details.Age} />
      ))}
      </div>

     {/* Filter by evan age */}
      <div className="flex gap-2">
        {filteredDetails.map((details, index) => (
          <Card key={index} name={details.Name} age={details.Age} />
        ))}
      </div>

      <div className="flex gap-2">
        {reduceAge.map((details, index) => (
          <Card key={index} name={details.Name} age={details.Age} />
        ))}
      </div>
    </>
  )
}
//filter : even age
//reduce: age/2
export default App
