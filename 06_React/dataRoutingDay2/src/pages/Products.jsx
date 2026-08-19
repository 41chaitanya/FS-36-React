import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { Outlet } from 'react-router'

const Products = () => {
    const [allData,setAllData]=useState([])

    useEffect(()=>{
        (async () => {
            const res=await fetch("https://fakestoreapi.com/products")
            const data=await res.json()
            console.log(data)
            setAllData(data)
        })()
    },[])
  return (
        <>
        
        {
            allData.map((p)=>{
                return <ProductCard key={p.id} product={p}/>
            })
        }
        <Outlet/>
        
        </>
  )
}

export default Products