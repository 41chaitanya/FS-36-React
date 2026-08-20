import { createContext, useEffect, useState } from "react";
import { BsCloudFog } from "react-icons/bs";
import { CgLayoutGrid } from "react-icons/cg";
export const UserContext=createContext()

export const UserProvider=({children})=>{
    const [allUsers,setALLUsers]=useState([])
    const [logdInUser,setLogedInUser]=useState(null)
    const [isLogedIn,setLogedIn]=useState(false)

    useEffect(()=>{
        (async () => {
            const res=await fetch("https://dummyjson.com/users")
            const data=await res.json()
            setALLUsers(data.users)
        })()
    },[])
    const checkUser=({email,password})=>{
        
        const user=allUsers.find((user)=>{
            return  user.email===email
        })

        
       return user

    }

    const login=(userValue)=>{
    
        const user=checkUser(userValue)
        if(user){
            setLogedIn(true)
            setLogedInUser(user)  
        }else{   
            setLogedIn(false)
            setLogedInUser(null)
        }
        
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