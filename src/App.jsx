import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
const handleAdd=()=>{
  setCount(count+1)
}
const handleSub=()=>{
  setCount(count-1)
}
const handleReset=()=>{
  setCount(0)
}
  return (
    <>
    <div className="flex justify-center my-30">
  <div className="card bg-slate-500 text-neutral-content w-96 ">
  <div className="card-body items-center text-center">
    <h2 className="card-title">COUNTER!</h2>
    <p>{count}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost" onClick={handleAdd} >ADD</button>
      <button className="btn btn-ghost" onClick={handleSub}>SUB</button>
      <button className="btn btn-primary" onClick={handleReset} >Reset</button>
    </div>
  </div>
</div></div>
    </>
  )
}

export default App
