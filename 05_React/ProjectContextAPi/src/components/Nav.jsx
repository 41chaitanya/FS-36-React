import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx';
import { PageContext } from '../context/PageContext.jsx';


const Nav = () => {

    const {theme,changeTheme}=useContext(ThemeContext)
    const {setShowHome}=useContext(PageContext)

  return (
   <>

    <nav style={{
        background:theme==="light"?"#D99B7F":"#0F3040",
        color:theme==="light"?"#111":"#fff"
    }}>
        {theme}
    <h1>beer biceps</h1>

    <button onClick={()=>{setShowHome(true)}}>Home</button>
    <button onClick={()=>{setShowHome(false)}}>Login</button>
    <button onClick={()=>{
        changeTheme()
    }}>change theme</button>


    </nav>
</>
  )
}

export default Nav