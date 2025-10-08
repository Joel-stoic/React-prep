import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Setting from './pages/Setting'
import Navbar from './components/Navbar'
import { Provider } from "react-redux"
import store from './app/store'
import Protect from './Protect'
import Logout from './pages/Logout'
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route element={<Protect />}>
            <Route path='/settings' element={<Setting />}></Route>
          </Route>
          <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App