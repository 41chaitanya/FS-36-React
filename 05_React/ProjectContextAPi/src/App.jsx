import React, { useContext } from 'react'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { PageContext } from './context/PageContext.jsx'
import Employee from './components/Employee.jsx'
import { EmployeeProvider } from './context/EmployeeContext.jsx'

const App = () => {
  const {showHome}=useContext(PageContext)
  return (
    <>



      <Nav/>



      {showHome?<Home/>:<Login/>}
      <EmployeeProvider>

      <Employee/>

      </EmployeeProvider>
      
     
   
    
    
    </>
  )
}

export default App