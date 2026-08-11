import { createContext, useState } from "react";

export const PageContext=createContext()
export const PageProvider=({children})=>{


    const [showHome,setShowHome]=useState(true)
    return(<PageContext.Provider value={{showHome,setShowHome}}>
        {children}
    </PageContext.Provider>)
}