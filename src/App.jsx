import React from 'react'
import { Routes,Route } from "react-router-dom"
import About from './view/About'
import Civi from './view/Civi'
import Navbar from './view/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<About />}/>
      <Route path='/civi' element={<Civi />}/>
    </Routes>
    </>
  )
}

export default App