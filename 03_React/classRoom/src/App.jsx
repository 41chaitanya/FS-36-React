import React, { useRef } from 'react'
import {useForm} from 'react-hook-form'

const App = () => {
  const {register ,getValues,handleSubmit}=useForm()


  const divRef=useRef(1)
  return (
    <>

    {}
    <div>{divRef.current}</div>
    <button onClick={()=>{
      console.log(getValues("name"))
    }}>inc</button>
      <input type="text" {...register("name")}/>
    
    </>
  )
}

export default App