import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'

const Profile = () => {
    const {logdInUser}=useContext(UserContext)
  return (
    <div>{logdInUser.email}</div>
  )
}

export default Profile