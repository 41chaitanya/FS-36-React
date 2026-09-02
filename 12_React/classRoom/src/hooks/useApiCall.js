import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../apis/productApi'

const useApiCall = () => {
    const [allData,setAllData]=useState([])
  useEffect(()=>{
    (async () => {
       const data= await getAllProducts()
       setAllData(data)
    })()
  },[])

  return allData
}

export default useApiCall
