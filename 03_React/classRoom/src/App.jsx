import React, { useState } from 'react'
import Main from './pages/Main'
import NameProvider from './context/nameContext'

const App = () => {
  return (
    <>
    <NameProvider>

      <Main/>
    </NameProvider>
    
    </>
  )
}

export default App