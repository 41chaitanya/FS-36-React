// step 1
// context consumer

import { createContext, useState } from "react";

export const nameContext=createContext()






// step 2 
// context provider
const NameProvider=({children})=>{
      const [name,setName]=useState("ayush")

    return(

        <nameContext.Provider value={{name}}>
            {children}
        </nameContext.Provider>

    )

}


export default NameProvider