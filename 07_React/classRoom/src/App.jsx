import React, { useState } from 'react'
import About from './About'

const App = () => {


  console.log("app render")


  const [count,setCount]=useState(0)

  const [name,setName]=useState("shivam")
  return (
    <>
    <h1>{count}</h1>
    {name}
    <button onClick={()=>{setCount(0)}}>inc</button>
    <button onClick={()=>{setName("rohan")}}>change name</button>


    <About value={count}/>
      
    
    </>
  )
}

export default App
