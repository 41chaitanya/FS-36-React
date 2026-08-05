import { useState } from "react"
import Home from "./component/Home.jsx"
import About from "./component/About.jsx"

const App = () => {


  const [toggle,setToggle]=useState(true)
  return (
    <>
    {toggle?<Home/>:<About/>}
    <button onClick={()=>setToggle(!toggle)}>Change</button>
    
    </>
  )
}

export default App