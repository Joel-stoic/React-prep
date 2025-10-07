import React, { useMemo, useState, useCallback } from 'react'
import List from './List'

const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3]
  }, [number])

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  }, [dark])

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}>Click me</button>
      <List getItems={getItems} />
    </div>
  )
}

export default App
