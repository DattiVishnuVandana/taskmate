import React, { useCallback, useEffect, useState } from 'react'
import UseFetch from './UseFetch';
import Loading from "./assets/loading.gif"

const productList = () => {
    const [cnt,setCnt]=useState(0)
    // const [products,setProducts]=useState([]);
    const [url,setUrl]=useState("http://localhost:8001/product/")
    // console.log(products);
    // console.log("outside useeffect-render");
   
    // console.log(products);
    const {data: products,loading,error}=UseFetch(url)
    // useEffect(()=>{
    //     console.log(cnt);
    // },[cnt])
    // console.log(products);
  return (
    <div>
        {loading &&  <p><img src={Loading} alt="loading"/></p> }
        {error &&  <p>{error}</p> }
     
             <button onClick={()=>setCnt(cnt+1)}>{cnt}</button>
   <button onClick={()=>setUrl("http://localhost:8001/products")}>all</button>
   <button onClick={()=>setUrl("http://localhost:8001/products?in_stock=true")}>InStock</button>
 
{products && products.map((product)=>(
    <p key={product.id}>{product.name}-price:${product.price} -{product.in_stock?"InStcock":"outStcock"}</p>
))}
    </div>
  )
}

export default productList