import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../slices/userSlice'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const logout = () => {
        dispatch(
            removeUser()
        )
        navigate('/')
    }

    return (
        <>

            <div>Logout</div>
            <button onClick={logout}>logout</button>
        </>

    )
}

export default Logout