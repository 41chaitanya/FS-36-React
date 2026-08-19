import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'
import { UserContext } from '../context/UserContext.jsx'

    

const Loign = () => {
    const {login}=useContext(UserContext)
    const {register,handleSubmit,reset}=useForm()
    const submit=(data)=>{
        console.log(data)
        login(data)
        reset()

    }
  return (

    <form onSubmit={handleSubmit(submit)}>

        <input type="text" placeholder='Email' {...register("email")}/>
        <input type="text" placeholder='Password' {...register("password")} />

        <button type='submit'>Login</button>


    </form>
    
  )
}

export default Loign