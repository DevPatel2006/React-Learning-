import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div className=' rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer'>
        <a href={props.elem.url} target='_blank'>
         <div className='h-64  w-52 bg-white overflow-hidden rounded-2xl'>
            <img className='h-full w-full object-cover' src={props.elem.download_url} alt=""/>
         </div>
         <h2 className='font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card