import React, { useContext } from 'react'
import UserContextProvider from '../context/UsercontextProvider.jsx'
import UserContext from '../context/Usercontext'

function Profile() {
    const {user} = useContext(UserContext) 
    if(!user) return <h6>Please login</h6>
  return (
    <h4>Welcome {user.username} !!</h4>
  )
}

export default Profile