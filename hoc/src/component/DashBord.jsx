import React from 'react'
import { withAuth } from './Auth'

const DashBord = () => {
   
  return (
    <div>DashBord</div>
  )
}
 const AuthDash=withAuth(DashBord)

export default AuthDash