import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import Users from './Users';
import Form2 from './Form2';
export default function Shorts() {
  
  let [count1, setCount] = useState(1)
  return (
    <>
    <h1>Shorts</h1>
    {/* <h1>{count1}</h1>
    <Users count1={count1} />
    <button onClick={() => setCount(count1 + 1)} className='btn btn-danger' >Click</button> */}
    <Form2/>
    </>
  )
}
