import React, { useRef, useState } from 'react'

const AddTask = ({tasks,setTasks}) => {
    // const [taskValue,setTaskValue]=useState("");
    const [progress,setProgress]=useState(false)
    const taskRef=useRef("")
    const handleReset=()=>{
        taskRef.current.value="";
        setProgress(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const task={
            id:Math.floor(Math.random()*10000),
            name:taskRef.current.value,
            completed:Boolean(progress)
        }
        console.log(taskRef);
        setTasks([...tasks,task])
        handleReset();
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <div className="join flex justify-center my-10" >
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
      <input type="text" placeholder="mytask" required ref={taskRef}/>
    </label>
   
    {/* <div className="validator-hint hidden">please enter task</div> */}
  </div>
  <select name="" id="" onChange={(e)=>setProgress(e.target.value)} value={progress}>
        <option value={false}>pending</option>
        <option value={true}>completed</option>
    </select>
  <button  type="submit" className="btn btn-neutral join-item">AddTask</button>
  <span onClick={handleReset} type="submit" className="btn btn-neutral ">Reset</span>
</div>
        </form>
        {/* <p>{taskValue.length}</p> */}
        <p>{taskRef.current.value}</p>
    </div>
  )
}

export default AddTask