import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
const App = () => {
  const {register,handleSubmit}=useForm()
  const [formData,setFormData]=useState({})
  const submit=(data)=>{
    setFormData({name:data.name,email:data.email,password:data.password})
  }

  return (
    <>
      <form  onSubmit={handleSubmit(submit)}>

        <input type="text" {...register("name")} />
        <input type="text" {...register("email")} />
        <input type="text" {...register("password")} />
        <button type='submit'>submit</button>
      </form>
      {formData.name}
      {formData.email}
      {formData.password}
   
    
    
    </>
  )
}

export default App