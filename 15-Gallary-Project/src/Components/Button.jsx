import React from 'react'

const Button = (props) => {
  return (
    <div className='flex justify-center gap-5 items-center p-4'>
     <button style={{opacity: props.index==1 ? 0.5 : 1}} 
     className='bg-yellow-400 hover:bg-yellow-500  transition-all duration-300 shadow-lg text-black py-2 px-5 rounded  font-semibold text-sm cursor-pointer active:scale-95'
        onClick={() => {
          if(props.index>1){
            props.setIndex(props.index-1)
            props.setUserData([])
          }
        }}>Prev</button>
        <h1 className='font-bold text-xl tracking-wide'>Page {props.index}</h1>
        <button className='bg-yellow-400 hover:bg-yellow-500  transition-all duration-300 shadow-lg text-black py-2 px-5  rounded font-semibold text-sm cursor-pointer active:scale-95'
        onClick={() => {
          props.setIndex(props.index + 1)
          props.setUserData([])
        }}>Next</button>
    </div>
  )
}

export default Button