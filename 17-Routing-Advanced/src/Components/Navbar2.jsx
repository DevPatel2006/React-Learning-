import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    const navigate = useNavigate()

  return (
    <div className='bg-cyan-700 py-2 px-3 mt-1'>
     <button onClick={() => {
        navigate('/')
      }}
       className='bg-emerald-800 px-5 py-3 m-4 rounded cursor:pointer active:scale-95 '>
        Return to Home Page
      </button>
      <button onClick={() => {
        navigate(-1)
      }}
       className='bg-emerald-800 px-5 py-3 m-4 rounded cursor:pointer active:scale-95 '>
        Back
      </button>
      <button onClick={() => {
        navigate(+1)
      }}
       className='bg-emerald-800 px-5 py-3 m-4 rounded cursor:pointer active:scale-95 '>
        Next
      </button>
    </div>
  )
}

export default Navbar2