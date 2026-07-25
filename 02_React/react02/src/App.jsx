import React from 'react'
import { useState } from 'react'

const App = () => {
  console.log("re rerenderd")


  const [a,setA]=useState(0)
  return (
    <>
    <h1 onClick={()=>{setA(a+1)
      console.log("clicked")
    }}>{a}</h1>
    


    </>
  )
}

export default App