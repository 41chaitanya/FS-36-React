import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createUsers, loign } from '../apis/usersApi'

const Login = () => {
    const { register, handleSubmit ,reset} = useForm({defaultValues:{
        gender:""
    }})
    const submit =async (data)=>{
        console.log(data)

        await loign(data)
   
    
        reset()

    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>


            <input type="text" placeholder='Email' {...register("email")} />
            <input type="text" placeholder='Password' {...register("password")} />
          
            <button type='submit'>submit</button>

            </form>

            

     
        </div>
    )
}

export default Login
