import axios from 'axios'
import API from './apiInstance'


export const createUsers=async (userData)=>{

    try {
        await API.post("/users",userData)
        return true
        
    } catch (error) {

        console.log(error)
        return false        
    }
}


export const getAllUser=async () => {
    const {data}=await API.get("/users")
    console.log(data.data)
    return data.data
}

export const updateAllDataById=async (id,dataToReplace) => {
    await API.put(`/users/${id}`,dataToReplace)
    return true
    
}
export const updateById=async (id,dataToUpdate) => {
    await API.patch(`/users/${id}`,dataToUpdate)
    return true
    
}
export const deleteById=async (id) => {
    await API.delete(`/users/${id}`)
    return true
    
}




