import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-4 bg-cyan-700'>
        <h2 className='text-2xl font-bold'>Dev Patel</h2>
        <div className='flex gap-10'>
          <Link className='text-lg font-semibold' to='/'>Home</Link>
          <Link className='text-lg font-semibold' to='/about'>About</Link>
          <Link className='text-lg font-semibold' to='/contact'>Contact</Link>
          <Link className='text-lg font-semibold' to='/product'>Product</Link>
          <Link className='text-lg font-semibold' to='/course'>Course</Link>
        </div>
    </div>
  )
}

export default Navbar