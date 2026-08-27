import React from 'react'

const Child =({handleSomething}) => {
    console.log("children rendering")
    handleSomething()
  return (
    <div>
        child component
    </div>
  )
}

export default  Child
