import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Products() {
    const[products,SetProducts]=useState([{}])
    useEffect(()=>{
        // axios.get("https://dummyjson.com/products").then(res=>SetProducts(res.data.products))
        axios.get("http://localhost:3004/products").then(res=>SetProducts(res.data))
    },0)
    console.log(products);
    //<h1>{products}</h1>
  return (
    <>
    <div className='row'>
       {products.map((e,i)=>{
        return(
   <div className='col-md-4  '>
    <div className='row '>
      
        
        <img height="200px" src={e.imgurl}/>
        <h2>{e.title}</h2>
        <h4>Rs {e.price}</h4>
       
       

    </div>
   </div>
    )
})}
</div>
    <div><h1>Products</h1></div>
    </>
  )
}
