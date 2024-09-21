import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar3 } from '../Assets/Components/Navbar/Navbar3'

const Service = () => {
  return (
    <div className='text-center flex flex-col gap-3 bg-slate-500 p-5'>
      <div>Service</div>
      <ul>
        <li className='bg-slate-100 m-auto w-[200px] h-[50px] rounded-full flex items-center justify-center'><Link to={'/service/website'} >Go to website page</Link></li>
      </ul>

      <Navbar3></Navbar3>
    </div>

  )
}

export default Service