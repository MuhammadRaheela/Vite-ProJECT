import React from 'react'
import Home from '../components/Home'
import { Route,Routes } from 'react-router-dom'
import About from '../components/About'
import FOUNDNOT from '../components/FOUNDNOT'

 function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/FOUNDNOT' element={<FOUNDNOT/>}></Route>

      </Routes>
    </>
  )
}

export default Router
