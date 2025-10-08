import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlice'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const login = () => {
    dispatch(
      setUser({
        name: "Alice",
        email: "joel@gmail.com"
      })
    )
    navigate('/')
  }
  return (
    <>
      <div>Login</div>
      <button onClick={login}>login</button>
    </>

  )
}

export default Login