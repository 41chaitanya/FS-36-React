import React, { useEffect, useEffectEvent, useState } from 'react'
import { data, useParams, useSearchParams } from 'react-router'

const OneProduct = () => {
    const {oneProduct}=useParams()
    const [product,setProduct]=useState({})

        useEffect(() => {
           (async () => {
             const res = await fetch(`https://dummyjson.com/products/${oneProduct}`);
             const data = await res.json();

             setProduct(data)
             console.log(data)
           
           })();
         }, [oneProduct]);


  return (
    <div>{product.title}</div>
  )
}

export default OneProduct