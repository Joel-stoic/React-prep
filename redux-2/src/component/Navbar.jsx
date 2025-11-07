import React from 'react'
import {useSelector} from "react-redux"

const Navbar = () => {
    const cartCount=useSelector(state=>state.cart.cart)
  return (
    <div>
        Cart:{cartCount}
    </div>
  )
}

export default Navbar