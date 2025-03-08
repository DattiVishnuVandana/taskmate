import React, { useCallback, useEffect, useState } from 'react'

const productList = () => {
    const [cnt,setCnt]=useState(0)
    const [products,setProducts]=useState([]);
    const [url,setUrl]=useState("http://localhost:8001/products")
    // console.log(products);
    // console.log("outside useeffect-render");
    const fetchProducts=useCallback( async ()=>{
      const response=  await fetch(url)
      const data=await response.json()
      setProducts(data)

    },[url])
    useEffect(()=>{
        fetchProducts()
// console.log("useeffect render");

    },[url])
    // console.log(products);
    useEffect(()=>{
        console.log(cnt);
    },[cnt])
  return (
    <div>
        <button onClick={()=>setCnt(cnt+1)}>{cnt}</button>
   <button onClick={()=>setUrl("http://localhost:8001/products")}>all</button>
   <button onClick={()=>setUrl("http://localhost:8001/products?in_stock=true")}>InStock</button>
{products.map((product)=>(
    <p key={product.id}>{product.name}-price:${product.price} -{product.in_stock?"InStcock":"outStcock"}</p>
))}
    </div>
  )
}

export default productList