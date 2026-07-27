import React from 'react'
import Card from './component/Card'
const App = () => {
  return (
    <div className='parent'> 
    <Card user="Aman" age={18} img="https://images.unsplash.com/photo-1601315488950-3b5047998b38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjByZW5kZXJ8ZW58MHx8MHx8fDA%3D"/> 
    <Card user="Sarthak" age={8} img="https://plus.unsplash.com/premium_vector-1683141228251-e07ff7ab1073?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"/> 
    <Card user="Dev" age={21} img="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fHww"/> 
    </div>
  )
}

export default App