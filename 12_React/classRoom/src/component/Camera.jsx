import React, { useRef } from 'react'
import useCameraAccess from '../hooks/useCameraAccess'

const Camera = () => {


    const vdoRef=useRef()

    const getVdoAccess =useCameraAccess()

    
  return (
    <div>

        <video ref={vdoRef} autoPlay muted />

        <button onClick={async ()=>{

            const stream=await getVdoAccess()
            vdoRef.current.srcObject=stream
        }}>Get vdo</button>


        <button  onClick={async()=>{
            const stream=await getVdoAccess()
            vdoRef.current.srcObject=null
        }}>remove camera access</button>
      
    </div>
  )
}

export default Camera
