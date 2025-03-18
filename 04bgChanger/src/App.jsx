import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen'
        style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none px-4 py-1 rounded-2xl text-white'
            style={{background:"red"}} onClick={() => setColor('red')}>Red</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white'
            style={{background:"black"}} onClick={()=>setColor('black')}>Black</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white'
            style={{background:"blue"}}onClick={()=>setColor('blue')}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white'
            style={{background:"green"}} onClick={()=>setColor('green')}>Green</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
