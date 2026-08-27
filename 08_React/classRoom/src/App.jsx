import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const App = () => {

  const [count ,setCount]=useState(0)
  


  const value=useMemo(()=>{
    console.log("calculating")
    let result=0
    for(let i=0;i<=1000000;i++)
    {
      result=result+i
    }
    return result
  },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>inc</button>

      <h1>{value}</h1>
      
    </div>
  )
}

export default App
