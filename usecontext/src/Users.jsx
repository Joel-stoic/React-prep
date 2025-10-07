import React from 'react'
import User from './User'
import { useContext } from 'react'
import { themeContext } from './App'
const Users = () => {
    const{theme}=useContext(themeContext)
    console.log("From users:",theme)
    return (
    <div>
        <h1>User</h1>
        <User/>
    </div >
  )
}

export default Users