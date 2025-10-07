import React, { useState } from 'react'
import Container from './Container'
import { createContext } from 'react'


export const themeContext = createContext()

const App = () => {
  const [theme, setTheme] = useState("light") 



  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <themeContext.Provider
      value={{
        theme
      }}
    >
      <button onClick={toggleTheme}>Click me!</button>
      <h1>App</h1>
      <Container theme={theme} toggleTheme={toggleTheme} />
    </themeContext.Provider>
  )
}

export default App
