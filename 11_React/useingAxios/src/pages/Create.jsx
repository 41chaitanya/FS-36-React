import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createUsers } from '../apis/usersApi'

const Create = () => {
    const [isCreated,setIsCreated]=useState(false)
    const { register, handleSubmit ,reset} = useForm({defaultValues:{
        gender:""
    }})
    const submit =async (data)=>{
        console.log(data)
       const created= await createUsers(data)
       setIsCreated(created)
        reset()

    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>


            <input type="text" placeholder='Name' {...register("name")} />
            <input type="text" placeholder='Email' {...register("email")} />
            <input type="text" placeholder='Password' {...register("password")} />
            <select {...register("gender")}>
                <option value="" disabled>Please select oone</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input type="text" placeholder='URL' {...register("profileImageUrl")} />
            <button type='submit'>submit</button>

            </form>

            {isCreated?"created":"pending....."}
        </div>
    )
}

export default Create
