import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'

const Profile = () => {
    const {logdInUser}=useContext(UserContext)
  return (
    <div>{logdInUser.eyeColor}{logdInUser.eyeColor}</div>
  )
}

export default Profile