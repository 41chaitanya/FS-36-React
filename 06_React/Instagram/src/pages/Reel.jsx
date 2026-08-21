import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Reel = () => {
  const initialReels = [
  {
    id: 1,
    vdo: "https://www.pexels.com/download/video/9329505/",
    userName: "chaitanya",
    likes: 120,
    comments: 20,
  },
  {
    id: 2,
    vdo: "https://www.pexels.com/download/video/3195394/",
    userName: "rahul",
    likes: 250,
    comments: 35,
  },
  {
    id: 3,
    vdo: "https://www.pexels.com/download/video/3129595/",
    userName: "priya",
    likes: 180,
    comments: 28,
  },
];

  const [reels,setReels]=useState(initialReels)
  const loaderRef=useRef()
  const loadMoreReels=()=>{

    const newReels=initialReels.map((reel)=>({
      ...reel,
      id:uuidv4()
    }))
    setReels((prevRels)=>([...prevRels,...newReels]))
  }
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting){
        loadMoreReels()
      }
    })


    observer.observe(loaderRef.current)



    loadMoreReels()

  },[])


  return (
    <div>

        {
          reels.map((reel)=>{
            return(
            <div key={ reel.id}>

              <video src={reel.vdo} autoPlay muted loop/>
            </div>
            )
          })
        }

        <div id='chahca' ref={loaderRef} >Loading....</div>
      
    </div>
  )
}

export default Reel
