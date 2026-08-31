import React, { useEffect, useState } from 'react'
import { getAllProdcuts } from '../apis/productApi'

const Products = () => {

    const [allProducts,setAllProducts]=useState([])

    useEffect(()=>{
        (async () => {
            setAllProducts(await getAllProdcuts())
        })()
    },[])

  return (
    <div>
        {
            allProducts.map((product)=>{
                return (
                    <div key={product.id}>

                        <p>{product.title}</p>

                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Products
