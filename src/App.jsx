import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar'


function App() {


  return (
    <>
      <div className="pageContainer h-screen w-screen 
      bg-[url('images/aotbg.jpg')] bg-cover bg-center
      flex flex-col items-center">
        <NavBar />
      <Outlet />
      </div>
    </>
  )
}

export default App
