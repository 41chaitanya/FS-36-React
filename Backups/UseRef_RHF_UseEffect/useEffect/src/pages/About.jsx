import React, { useEffect } from 'react'

const About = ({setToggle}) => {
        console.log("rendering about")


        // useEffect(()=>{
        //     const timer=setInterval(()=>{
        //         console.log("chlo byee")
        //     },100)



        //     // clean up function

        //     return ()=>{
        //         clearInterval(timer)
        //     }
        // },[])

  return (

    <>
     <h1>About</h1>
     <input placeholder='name'/>

    <button onClick={()=>setToggle(true)}>go to home</button>
    </>
  )
}

export default About