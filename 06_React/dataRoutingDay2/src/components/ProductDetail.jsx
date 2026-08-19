import React, { useEffect } from 'react'
import {useParams} from 'react-router'
const ProductDetail = () => {
    const params=useParams()
    console.log(params.id)
      useEffect(()=>{
            (async () => {
                const res=await fetch(`https://fakestoreapi.com/products/${params.id}`)
                const data=await res.json()
                console.log(data)
              
            })()
        },[params])
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail