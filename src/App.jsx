import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Landing from './Components/Landing/Landing'
import Project from './Components/Project/Project'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/project/:id' element={<Project/>}/>
      </Routes>
    </Router>
  )
}

export default App
