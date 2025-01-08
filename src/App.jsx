import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='border py-2 px-5 bg-indigo-200'>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
