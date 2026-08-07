import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import Button from './Components/Button'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=16`)
    setUserData(response.data);    
  }

  let printUserData = <div className='text-gray-300 text-xl top-1/2 left-1/2 absolute -translate-x-1/2-translate-y-1/2 w-14 h-14 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin'></div>
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return(
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      )
    })
  }

  useEffect(function(){
    getData()
  },[index])

  return (
    <div className='bg-black text-white flex flex-col overflow-auto min-h-screen px-8 py-8 pt-4'> 
      <div className='flex h-[90%] gap-3 overflow-auto flex-wrap'>
        {printUserData}
      </div>
      <div >
        <Button index={index} userData = {userData} setUserData={setUserData} setIndex={setIndex}/>
      </div>
    </div>
  )
}

export default App