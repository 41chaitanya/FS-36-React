import React from 'react'
import Nav from './component/Nav.jsx'
import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <>
        <Nav/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>


      </Routes>

     
    
    </>
  )
}

export default App