import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='px-18 pb-16 pt-6 h-[90vh]  items-center  flex gap-10 '>
        <Leftcontent/>
        <Rightcontent Users={props.Users}/>
    </div>
  )
}

export default Page1content