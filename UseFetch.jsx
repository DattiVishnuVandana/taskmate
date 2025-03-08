import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data,setData]=useState(null)

 useEffect(()=>{
    const fetchData=async ()=>{
        const res=await fetch(url);
        const result=await res.json()
        setData(result)
        // console.log(result);
    }
   fetchData();
 },[url])

  return {data}
}

export default UseFetch