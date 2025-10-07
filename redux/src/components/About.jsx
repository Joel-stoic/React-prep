import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
    const contact=useSelector((state)=>state.contactInfo.users)
  return (
    <div>About {contact}</div>
  )
}

export default About