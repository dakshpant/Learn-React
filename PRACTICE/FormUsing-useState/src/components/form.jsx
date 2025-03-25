import React, { useState } from 'react'

export const Form = () => {
  const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(`Your Name is ${fName} ${lName}, you are ${age} years old and your email is ${email}`);
  }

  // const [formData, setFormData] = useState({
  //   fname: "",
  //   lname: "",
  //   age: "",
  //   email: ""
  // })  

  // const handelChange = (e)=>{
  //   // console.log(e.target.value);
  //   setFormData({...formData, [e.target.name]: e.target.value})
  // }
  return (
    <div className='w-100 h-100 m-auto bg-amber-50'>
      <div className='grid place-items-center grid-cols-1 p-10 '>
        <h1 className='text-2xl font-bold font-mono text-indigo-700 shadow'>Registration Form</h1>
        <form>
          <div className='py-5'>
            <label className='me-2' htmlFor="fName">First Name:</label>
            <input onChange={e => setfName(e.target.value)} value={fName} className='border rounded' type="text" placeholder='Alex' name='fname' required />
          </div>
          <div className='pb-5'>
            <label className='me-2' htmlFor="lName">Last Name:</label>
            <input onChange={e =>setlName(e.target.value)} value={lName} className='border rounded' type="text" placeholder='John' name="lname" required />
          </div>
          <div className='pb-5'>
            <label className='me-2 ps-12' htmlFor="tel">Age:</label>
            <input onChange={e => setAge(e.target.value)} value={age} maxLength={2} className='border rounded' type="tel" placeholder='21' name="lname" required />
          </div>
          <div className='pb-5'>
            <label className='me-2 ps-10' htmlFor="Email">Email:</label>
            <input onChange={e => setEmail(e.target.value)} value={email} className='border rounded' type="email" placeholder='z2H6R@example.com' name="email" required />
          </div>
          <div>

            
     <button onClick={handelSubmit} type='submit' className="ms-25 relative block group ">
      <span className="absolute inset-0 bg-indigo-500  rounded-lg"></span>
      <div className="transition bg-black relative border-2 rounded-lg -translate-x-2 -translate-y-2">
        <div className="p-2 ">
          <p className="text-xl text-white font-outerSans font-medium">Button</p>
        </div>
      </div>
    </button>
      

          </div>
        </form>
      </div>
    </div>
  )
}

export default Form