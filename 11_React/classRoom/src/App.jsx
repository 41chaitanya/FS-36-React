import axios from 'axios'
import React, { useEffect } from 'react'

const App = () => {


  // const createProduct =async () => {

  //   const productRes=fetch("https://fakestoreapi.com/products",{
  //     method:"post",
  //     headers:{
        
  //     },
  //     body:JSON.stringify({
  //       name:"",
  //       image:"",
  //       rating:"",
  //       price:""
  //     })
  //   })
  //   //post
    
  // }



  const createProduct =async () => {
    const data=await axios.post("https://fakestoreapi.com/products",{
      name,
      Image,
      price,
      rating
    })
    
  }

  useEffect(()=>{
    (async () => { 
      const data=await axios.get("https://fakestoreapi.com/products")



      console.log(data)
      
    })()
  },[])
  return (
    <div>App</div>
  )
}

export default App