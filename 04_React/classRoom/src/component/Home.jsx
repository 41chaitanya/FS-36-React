import React from 'react'

const Home = () => {
    console.log("home rendering")
  return (
    <div>
 
        <input type="text" onChange={(e)=>console.log(e)} />
    </div>
  )
}

export default Home