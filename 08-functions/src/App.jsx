import React from 'react'

const App = () => {
  function mouseEnter(val){
    if (val<0){
      console.log("Sidhu");
  }else{
    console.log("Undhu")
  }
}

  return (
    <div onWheel={(elem) => {
      mouseEnter(elem.deltaY)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App