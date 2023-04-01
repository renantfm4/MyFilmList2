import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'

import './App.css'
import NavBar from './components/NavBar'

function Homew() {

  return (
    <div className="App">
      <NavBar />
      <Home/>
      <Outlet />
    </div>
  )
}

export default Homew