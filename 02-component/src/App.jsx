import React from 'react'
import Card from './card'
import Navbar from './navbar'
const App = () => {
const name = "Dev Patel"
const age = "21"

return( <div>
  <h1>Hello My name is {name}</h1>
  <h2>My age is {age}</h2>
  <Navbar />
  <Card />
  <Card />
  <Card />
</div>
)
}
export default App