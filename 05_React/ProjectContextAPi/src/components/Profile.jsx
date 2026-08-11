import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import { UserContext } from '../context/UserContext.jsx'

const Profile = () => {
     const {theme}=useContext(ThemeContext)
      const {user}=useContext(UserContext)
  return (
  <>
  
    <div style={{
        background:theme==="light"?"#D99B7F":"#0F3040",
        color:theme==="light"?"#111":"#fff"
    }}>

    <h1>{user.name}</h1>
    <h2>{user.role}</h2>

    <h3>{user.org}</h3>
    </div>
  </>
  )
}

export default Profile