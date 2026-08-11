import React, { useEffect } from 'react'
import getProduct from '../api'

const Home = ({setToggle}) => {
    console.log("rendering home")
    
    useEffect(()=>{
        
        getProduct()
    },[setToggle])
  return (
    <>
    <h1>home</h1>
         <input placeholder='contact'/>


    <button onClick={()=>setToggle(false)}>go to about</button>
    </>
  )
}

export default Home