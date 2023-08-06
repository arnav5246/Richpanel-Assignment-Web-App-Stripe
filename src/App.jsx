import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Confirmation from './pages/confirmation'
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/login" element = { <Login />} />
        
        <Route path="/signup" element = {<Signup />} />
        <Route path="/dashboard" element = {<Dashboard />} />
        <Route path="/dashboard/confirmation" element = {<Confirmation />} />
      </Routes>
       
      {/* <Signup/>  */}
    
    </>
  )
}

export default App