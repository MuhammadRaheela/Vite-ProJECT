import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>About</Link>

    </>
  )
}
