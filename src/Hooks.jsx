import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [cnt,setCnt]=useState(0);
    // useEffect(()=>{
    //     alert("renders everytime")
    // })
    // useEffect(()=>{
    //     alert("renders first time only")
    // },[])
    useEffect(()=>{
        alert("renders when cnt changed")
    },[cnt])
  return (
    <div>
    {console.log("rendering")}
      <p>count:{cnt}</p>
      <button onClick={()=>setCnt(cnt+1)}>click</button>
     {/* { alert("count updated",{cnt})} */}

    </div>
  )
}

export default Hooks