import React, { useEffect, useState } from 'react'

const productList = () => {
    const [products,setProducts]=useState([]);
    // console.log(products);
    useEffect(()=>{
        fetch("http://localhost:8001/products").then(res=>res.json()).then(data=>setProducts(data))

    },[])
    console.log(products);
  return (
    <div>
   

    </div>
  )
}

export default productList