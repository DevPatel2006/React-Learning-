import React from 'react'

const App = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  }
  localStorage.setItem('user',JSON.stringify(user))

  const userr = JSON.parse(localStorage.getItem('user'))
  console.log(userr, typeof(userr))
  return (
    <div>App</div>
  )
}

export default App