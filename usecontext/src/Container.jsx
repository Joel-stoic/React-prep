import React from 'react'
import Users from './Users'
import { useContext } from 'react'
import { themeContext } from './App'

const Container = () => {
    const{theme}=useContext(themeContext)
    console.log("i am from container :",theme)
  return (
    <div>
      <h1
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white"
        }}
      >
        Container
      </h1>
      <Users />
    </div>
  )
}

export default Container
