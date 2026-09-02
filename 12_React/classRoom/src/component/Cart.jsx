import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

const Cart = () => {

      const [count,increament,drecement] =useCounter()
      
  return (
    <div>
        <h1>Cart:{count}</h1>

        <button onClick={()=>{
            increament()
        }}>increment</button>

        <button onClick={()=>{
            drecement()
        }}>drecement</button>
      
    </div>
  )
}

export default Cart
