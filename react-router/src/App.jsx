import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Users from "./Pages/Users"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Navbar from "./components/Navbar"
import User from "./Pages/User"

const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
