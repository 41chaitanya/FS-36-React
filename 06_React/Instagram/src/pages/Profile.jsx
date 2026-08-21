import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'

const Profile = () => {
    const {logdInUser}=useContext(UserContext)
  return (
    <>
    
    hello</>
  )
}

export default Profile