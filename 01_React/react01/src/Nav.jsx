import React from 'react'

const Nav = () => {
  const isAdmain=false


  if(isAdmain){
return (
    <div>Nav</div>
  )
  }
  else{
    return(<>"not admin"</>)
  }


  
}

export default Nav