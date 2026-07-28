import React, { useState } from 'react'
import {Bookmark , BookmarkCheck} from 'lucide-react'

const Cards = (props) => {
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <div className='cards'>
        <div>
          <div className='top'>
          <img src={props.logo}/>
         <button onClick={() => setSaved(!saved)}> Save {saved ? <BookmarkCheck size={20} stroke='black' fill='black' /> : <Bookmark />}</button>
          </div>
          <div className='center'>
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <h3>{props.salary}</h3>
            <p>{props.loc}</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default Cards