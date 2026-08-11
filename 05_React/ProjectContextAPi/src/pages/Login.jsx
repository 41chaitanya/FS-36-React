import React, { useContext } from 'react'



import {set, useForm} from 'react-hook-form'
import { ThemeContext } from '../context/ThemeContext.jsx'
import { UserContext } from '../context/UserContext.jsx'

const Login = () => {
  const {register ,handleSubmit,reset}=useForm()


  const {theme}=useContext(ThemeContext)
  const {setUser}=useContext(UserContext)


  const submit=(data)=>{

    console.log(data)
    setUser(data)
    reset()


  }
  return (
    <>

    
      <form style={{background:theme==="light"?"#A56F63":"#464858",
        color:theme==="light"?"#111":"#fff"}}
        onSubmit={handleSubmit(submit)}
        
        >
        <input placeholder='Name' type="text" {...register('name')} />
        <br />
        <input placeholder='Role' type="text" {...register('role')} />
        <br />
        <input placeholder='Oraganization' type="text" {...register('org')} />
        <br />
        <button type='submit'>submit</button>
      </form>
    
    
    </>
  )
}

export default Login