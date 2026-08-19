import { createContext, useState } from "react";

export const UserContext=createContext()

export const UserProvider=({children})=>{
    const [logdInUser,setLogedInUser]=useState(null)
    const [isLogedIn,setLogedIn]=useState(false)


    const login=(userValue)=>{
        setLogedInUser(userValue)
        setLogedIn(true)
        
    }
    const logout=()=>{
        setLogedInUser(null)
        setLogedIn(false)

    }

    return (


        <UserContext.Provider value={{login,logout,isLogedIn,logdInUser}} >
            {children}
        </UserContext.Provider>
    )
}