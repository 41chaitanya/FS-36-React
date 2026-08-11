import { createContext, useState } from "react";

export const ThemeContext=createContext()//context consumer


// context provider
export const ThemeProvider=({children})=>{

    const [theme,setTheme]=useState("light")


    const changeTheme=()=>{
        setTheme(prev=>prev==="light"?"dark":"light")
    }
   
    return(<ThemeContext.Provider value={{theme,changeTheme}}>
        {children}

    </ThemeContext.Provider>)
}