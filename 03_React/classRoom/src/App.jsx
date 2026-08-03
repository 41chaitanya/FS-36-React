import React, { useEffect, useRef } from 'react'

const App = () => {
  const h1Ref=useRef()



  useEffect(()=>{
    console.log(h1Ref.current)
  },[])


  console.log(h1Ref.current)
  return (
    <div>
      <h1 ref={h1Ref}>hello</h1>
      <video src=""></video>






    </div>
  )
}

export default App