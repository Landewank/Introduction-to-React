import React from 'react'
import Navbar from '../Assets/Components/Navbar/Navbar'
import { useState } from 'react'

const Home = () => {
  const [color,setColor]= useState("red")
 
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='bg-blue-500 p-4 text-white text-center' >Below I will learn about useState</h1>
      <h1>My favorite color is {color}!</h1>
      <button className='bg-black text-white rounded-full p-2' onClick={()=>setColor(color?'blue':'red')} >change color</button>
      
    </div>

  )
}
export default Home
  // <Button text="Sign Up" bg_color="bg-slate-600 text-white"  ></Button>
  // <Button text="Sign in" bg_color="border-2 border-black"></Button>
  //  <h1>Home</h1>
  //     <Link to={'/contact'}>go to contact</Link>