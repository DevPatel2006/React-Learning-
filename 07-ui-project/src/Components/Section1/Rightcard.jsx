import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-1/3 overflow-hidden relative rounded-4xl shrink-0'>
        <img className='h-full w-full object-cover' src={props.img}/>
        <Rightcardcontent color={props.color} id={props.id}number={props.number} intro={props.intro} tag={props.tag}/>
    </div>
  )
}

export default Rightcard