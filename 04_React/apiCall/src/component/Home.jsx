import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
    const divRef=useRef()
    const [play,setPlay]=useState(false)
    useEffect(()=>{
        
        console.dir(divRef.current)

    },[])
    divRef.current.style.background="red"
  return (
    <>
    
        <video  ref={divRef} src=""></video>
    
    </>
  )
}

export default Home