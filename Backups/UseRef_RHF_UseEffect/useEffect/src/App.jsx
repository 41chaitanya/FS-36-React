import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const vodRef = useRef();
  const [showVideo,setShowVideo]=useState(true)
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        if(showVideo){
          vodRef.current.srcObject = stream;

        }
        else{

          vodRef.current.srcObject=null
        }
      })
      .catch((error) => {
        // Handle errors (e.g., permission denied, no devices)
        console.error("Error accessing media devices.", error);
      });
  }, [showVideo]);
  return (
    <>
      <video ref={vodRef} autoPlay muted />
      <button onClick={()=>setShowVideo(prev=>!prev)}>toggle</button>
    
    </>
  );
};

export default App;
