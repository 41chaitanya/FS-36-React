import { createContext, useEffect, useState } from "react";

export const StoriesContext=createContext()




export const StoriesProvider=({children})=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        (async () => {
            const res=await fetch("https://dummyjson.com/users")
            const data=await res.json()
         
            setUsers(data.users)
        })()
    },[])
    return (
        <StoriesContext.Provider value={{ users }}>
            {children}
        </StoriesContext.Provider>
    )
}