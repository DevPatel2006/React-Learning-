import React from 'react'
import Section1 from './Components/Section1/Section1'
import Navbar from './Components/Section1/Navbar'
const App = () => {
const Users = [
  { 
    img :'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Prime customers, that have access to bank credit and are satisfied, with the current product',
    tag :'Satisfied',
    color:"linear-gradient(135deg, #2563EB, #60A5FA)"
  },
  {
    img :'https://plus.unsplash.com/premium_photo-1669904021308-567d085a0ee7?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Prime customers, that have access to bank credit and are not satisfied, with the current service',
    tag :'Underserved',
    color:'linear-gradient(135deg,#10B981,#34D399)'
  },
  {
    img :'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    intro:'Customers from near-prime and sub-prime segments with no access to bank credit',
    tag :'Underbanked',
    color:'linear-gradient(135deg,#F59E0B,#FBBF24)'
  },
    {
    img :'https://plus.unsplash.com/premium_photo-1661767011483-feab300357ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Customers from near-prime and sub-prime segments with access to bank credit Card',
    tag :'Undertaked',
    color:'linear-gradient(135deg,#F472B6,#EC4899)'
  },
]
  return (
    <div>
      <Section1 Users={Users}/>
    </div>
  )
}

export default App