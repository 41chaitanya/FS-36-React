import React, { useEffect, useState } from "react";

const About = () => {
  console.log("about rendering");
  const [count,setCount]=useState(1)
  useEffect(() => {

    const socket=socket.connnet()
    let a=setInterval(() => {
      console.log(count);
      setCount(count+1)
    }, 1000);

    return ()=>{
        clearInterval(a)
        
        
    } //clean up function or destroy function
  }, [count]);

  return <div>About{count}</div>;
};

export default About;
