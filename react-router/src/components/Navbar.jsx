import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav>
        <h1>Grony</h1>
        <ul>
            <Link to={'/'}>Home</Link>
            {/* <Link to={'/about'}>About</Link> */}
            <li onClick={()=>navigate('/about')}>About</li>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/users'}>Users</Link>
        </ul>
    </nav>
  )
}

export default Navbar