import { Children, createContext, useEffect, useState } from "react";

export const EmployeeContext=createContext()
export const EmployeeProvider=({children})=>{

    const [employeeData,setEmployeeData]=useState([])
    useEffect(()=>{
       (async()=>{
        const res=await fetch("https://picsum.photos/v2/list")
        const data=await res.json()
        setEmployeeData(data)
    })()

    },[])


    return(<EmployeeContext.Provider value={{employeeData}}>{children}</EmployeeContext.Provider>)
}
