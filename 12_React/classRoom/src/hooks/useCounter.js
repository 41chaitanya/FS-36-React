import { useState } from "react"

const useCounter = () => {
    const [count,setCount]=useState(0)
    const increament=()=>{
        setCount(prev=>prev+1)
    }
    const drecement=()=>{
        setCount(prev=>prev-1)
    }



    return[ count,increament,drecement]
}

export default useCounter
