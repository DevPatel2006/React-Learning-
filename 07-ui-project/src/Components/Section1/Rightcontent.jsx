import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id="right" className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl '>
        {props.Users.map(function(elem,idx){
            return <Rightcard  id={idx} color={elem.color} number={elem.number} img={elem.img} intro={elem.intro} tag={elem.tag} />
        })}
    </div>
  )
}

export default Rightcontent