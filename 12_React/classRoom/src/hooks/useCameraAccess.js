import React from 'react'

const useCameraAccess = () => {
    const getVdoAccess=async ()=>{
       const stream=await  navigator.mediaDevices.getUserMedia({ video: true,audio:true })
      return stream
    }

    return getVdoAccess
  
}

export default useCameraAccess
