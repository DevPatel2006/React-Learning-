import React from 'react'

const Rightcardcontent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
            <h2 className='rounded-full bg-white text-2xl font-semibold w-14 h-14 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-14'>{props.intro}</p>
                <div className='justify-between flex'>
                    <button style={{background:props.color}} className='text-white font-medium px-7 py-2 rounded-full text-lg'>{props.tag}</button>
                    <button style={{background:props.color}} className='text-white font-medium px-3  py-2 rounded-full'><i className="ri-arrow-right-line"></i> </button>
                </div>
            </div>
        </div>
  )
}

export default Rightcardcontent