import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function Increment(){
    setCount(count + 10)
  }
  function Decrement(){
    setCount(count - 5)
  }

return(
  <div>
    <h1>{count}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
  </div>
)
}
export default App