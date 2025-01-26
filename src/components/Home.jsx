import React from 'react'
import { useNavigate } from 'react-router-dom'
// import About from './About'

export default function Home() {
  let nav = useNavigate()
  return (
    <>
     <h1>Home page</h1>
     <button onClick={()=>nav("/About")}>About</button> 
    </>
  )
}
