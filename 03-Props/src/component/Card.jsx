
import React from 'react'

const card = (props) => {
    return (
   
        <div className='card'>
            <img src={props.img}/>
            <h1>{props.user}</h1>
            <h2>My Age is {props.age}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>   
  )
}

export default card