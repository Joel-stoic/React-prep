// import { useEffect, useRef, useState } from 'react'


// function App() {

//   const ref = useRef(0)

//   useEffect(() => {
//     console.log("COMPONENT RENDERED")
//   })

//   function handleClick() {
//     ref.current = ref.current + 1
//     console.log(ref.current)
//   }
//   const handleClick1=()=> {
//     setNum(num+1)
//   }
//   const [num, setNum] = useState(0)
//   return (
//     <>
//       <p>{ref.current}</p>
//       <button onClick={handleClick}>
//         Click me!
//       </button>
//       <p>{num}</p>
//       <button onClick={handleClick1}>
//         Click me!
//       </button>
//     </>
//   )
// }

// export default App

// import { useState, useRef } from "react"

// function App() {
//   const [count, setCount] = useState(0)
//   const timerIdRef = useRef(null) // ✅ store timer ID here

//   const startTimer = () => {
//     if (!timerIdRef.current) {
//       timerIdRef.current = setInterval(() => {
//         setCount(prev => prev + 1)
//       }, 1000)
//     }
//   }

//   const stopTimer = () => {
//     clearInterval(timerIdRef.current)
//     timerIdRef.current = null
//   }

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   )
// }
// export default App

import { useState, useRef, useEffect } from "react"

function App() {
  const [value, setValue] = useState("")
  
  // 1️⃣ To store previous value
  const prevValueRef = useRef("")

  // 2️⃣ To reference the input element
  const inputRef = useRef(null)

  useEffect(() => {
    prevValueRef.current = value
  }, [value])

  const handleChange = () => {
   inputRef.current.focus()
   inputRef.current.style.backgroundColor="red"
  }

  return (
    <div>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        ref={inputRef}   // ✅ DOM reference here
      />
      <p>Current: {value}</p>
      <p>Previous: {prevValueRef.current}</p>
      <button onClick={handleChange}>Click</button>
    </div>
  )
}
export default App
