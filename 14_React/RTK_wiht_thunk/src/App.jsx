import React, { useEffect, useEffectEvent } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchProduct } from './feature/product/productSlice'
const App = () => {

  const dispatch=useDispatch()
  const {p}=useSelector(state=>state)

  useEffect(()=>{
    dispatch(fetchProduct())
  },[])
  if(p.loading){
    return <h1>Loading.....</h1>
  }
  if(p.error){
    return <h1>
      some error in api fetching 
    </h1>  
  }
  return (
  <>
    {p.products.map((p)=><p>{p.title}</p>)}
  </>
  )
}

export default App