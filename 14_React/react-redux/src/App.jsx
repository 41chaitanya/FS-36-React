import React from 'react'
import { fetchProduct } from './redux/products/productAction'
import {useDispatch,useSelector} from 'react-redux'

const App = () => {

  const dispatch=useDispatch()
  const {loader,products,error}=useSelector(state=>state)
  console.log(products,"hello")

 
  const handleProducts=()=>{
    dispatch(fetchProduct())
    
  }

  if(loader){
    return <h1>Loading ....</h1>
    
  }
  if(error){
    return <h1>facing error to. get the product. data </h1>

  }
  return (
    <>
    
      <button onClick={handleProducts}>fetch products</button>
      {
        products.map((p)=>{
          return <p>{p.title}</p>
        })
      }
    
    </>
  )
}

export default App







// dispatch
