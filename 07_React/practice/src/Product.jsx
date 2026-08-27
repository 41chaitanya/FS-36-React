import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard'
import { useMemo } from 'react'

const Product = () => {

    const [cart,setCart]=useState([])

    const [filter,setFilter]=useState("")

  
    
    
    
    const totalAmount=useMemo(()=>{

        console.log("calculating")
        const value= cart.reduce((i,j)=>{
            return i+j.price
        },0)
        return value
    },[cart])

    const addToCart=()=>{
        
    }
    
    useEffect(()=>{
        (async () => {
            const res=await fetch("https://fakestoreapi.com/products")
            const data=await res.json()
            setCart(data)
            console.log(data)
        })()
    },[])
  return (
    <>
        <h1>{totalAmount}</h1>
        <input type="text" placeholder='apply filter' value={filter} onChange={(e)=>setFilter(e.target.value)}  />
        {
            cart.map((c)=>{
                return  <ProductCard key={c.id} c={c}/>
            })

        }
    
    
    </>
  )
}

export default Product
