import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Home/>
      <h1>Home</h1>
      <Link to={'/contact'}>go to contact</Link>
    </div>

  )
}

export default Home