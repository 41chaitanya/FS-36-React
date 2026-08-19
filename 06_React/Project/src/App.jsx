import React from 'react'
import Nav from './components/Nav.jsx'
import {Routes,Route} from 'react-router'
import Ecommerce from './pages/Ecommerce.jsx'
import Grocery from './pages/Grocery.jsx'
import Travel from './pages/Travel.jsx'
import OneProduct from './components/OneProduct.jsx'

const App = () => {
  return (
   <>
    <Nav/>
    

    <Routes>

   

      <Route path='/products' element={<Ecommerce/>}>

          <Route path=":oneProduct" element={<OneProduct/>}/>
       
        
      </Route>
      <Route path='/travels' element={<Travel/>}/>
      <Route path='/grocery' element={<Grocery/>}/>

    </Routes>


    
   </>
  )
}

export default App