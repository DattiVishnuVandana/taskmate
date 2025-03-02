import React, { useState } from 'react'


const BoxCard = ({result,children}) => {
    const [show,setShow]=useState(true)
  return (
    <div>
         <button className={`btn  btn-square btn-ghost `} onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
        <div className={`box ${result} ${show? "":"hidden"} mx-15 my-5 p-5`}>
{children}
</div>
    </div>
  )
}

export default BoxCard