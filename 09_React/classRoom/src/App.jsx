import React, { useCallback, useState } from 'react'
import Child from './Child'

const App = () => {


  console.log("app re render")

  const [count ,setCount]=useState(0)


  const handleSomething=useCallback(()=>{
    console.log("saying hello")
  },[])
  return (
   <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>inc</button>
    <Child handleSomething={handleSomething}/>

   
   </>
  )
}

export default App
