import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

const ProductList = () => {

    const [count,increament,drecement] =useCounter()
  return (
    <div>
        <h1>Product:{count}</h1>

        <button onClick={()=>{
            increament()
        }}>increment</button>

        <button onClick={()=>{
            drecement()
        }}>drecement</button>
      
    </div>
  )
}

export default ProductList
