import React from 'react'
import Button from './Button'
import { clickTracking } from './clickTracking'
import AuthDash from './component/DashBord'
// import DashBord from './component/DashBord'
// import { withAuth } from './component/Auth'

const App = () => {
  const ButtonTracking=clickTracking(Button)
  // const AuthenDash =withAuth(DashBord)
  return (
    <div>
      <ButtonTracking label="Hey now" trackingInfo={{"amount":"2000","user":"joel"}}/>
      <AuthDash/>
    </div>
  )
}

export default App