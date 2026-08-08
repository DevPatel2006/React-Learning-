import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex py-4 justify-center gap-10'>
          <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
          <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
        </div>
        <h1>Product Page</h1>
        <Outlet/>
    </div>
  )
}

export default Product