import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contacts/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
         <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
