import React from 'react'
import ProductList from './component/ProductList'
import Cart from './component/Cart'
import useLocalStorage from './hooks/useLocalStorage'
import useApiCall from './hooks/useApiCall'
import Camera from './component/Camera'

const App = () => {
   
  useLocalStorage("products",JSON.stringify(useApiCall()))


  const data=localStorage.getItem("products")
   const  productData=JSON.parse(data)
  return (
    <div>
      <ProductList/>
      <Cart/>

      {productData.map((p)=>{
        return <>
          {p.title}
        </>
      })}

      <Camera/>
    </div>
  )
}

export default App
