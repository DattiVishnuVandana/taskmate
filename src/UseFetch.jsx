import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")

 useEffect(()=>{
    const controller=new AbortController
    const fetchData=async ()=>{
        setLoading(true);
        try{

        const res=await fetch(url,{signal:controller.signal});
        console.log(res);
        if(!res.ok){
            throw new Error(res.statusText)
        }
        setError("")
        const result=await res.json();
        setLoading(false)
        setData(result)}
        catch(err){
            setLoading(false)
            setError(err.message)
            console.log(err.message);
        }
        // console.log(result);
        return ()=>controller.abort
    }

   fetchData();

 },[url])

  return {data,loading,error}
}

export default UseFetch