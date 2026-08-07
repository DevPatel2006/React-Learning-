import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging(){
    console.log("A is changing ");
  }
  function bChanging(){
    console.log("B is changing ");
  }
  useEffect(function(){
    aChanging()
  },[a])
  useEffect(function(){
    bChanging()
  },[b])
  return (
    <div>
      <h1>A : {a}</h1>
      <h2>B : {b}</h2>
      <button onClick={() => {
        setA(a+1)
      }}>A</button>
      <button onClick={() => {
        setB(b-1)
      }}>B</button>
    </div>
  )
}

export default App