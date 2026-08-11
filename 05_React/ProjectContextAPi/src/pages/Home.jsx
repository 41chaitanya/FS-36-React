import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import Profile from '../components/Profile.jsx'
import { UserContext } from '../context/UserContext.jsx'

const Home = () => {


    const {theme}=useContext(ThemeContext)
   
  return (
    <div style={{
            background:theme==="light"?"#A56F63":"#464858",
        color:theme==="light"?"#111":"#fff"
    }}>Home
        <Profile/>
    
    </div>
  )
}

export default Home