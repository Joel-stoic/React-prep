import React from 'react'

const App = () => {

  const apiCall=async()=>{
    const response=await fetch("https://v2.jokeapi.dev/joke/Any",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    })
    const data=await response.json()
    console.log(data)
  }

  return (
    <div>
      <h1>Api call</h1>
      <button onClick={apiCall}>Apicall</button>
    </div>
  )
}

export default App


// fetch("",{
//   method:"POST",
//   headers:{"Content-Json":"application/json"},
//   body:JSON.stringify({email,password})
// })


fetch("",{
  method:"POST",
  headers:{"Content-Json":"application/json"},
  body:Json.stringify({email,password})
})
// and also need to make it json
// and also need to specify error handling


axios.post("",
  email,
  password
)
// no need to make it json axios take care of it
// for this axios take care of error handling