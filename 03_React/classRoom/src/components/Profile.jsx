import React, { useContext } from 'react'
import { nameContext } from '../context/nameContext'

const Profile = () => {
    const  {name}=useContext(nameContext)
  return (
    <div>{name}</div>
  )
}

export default Profile