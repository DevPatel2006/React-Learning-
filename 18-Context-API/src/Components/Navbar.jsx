import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../Context/ThemeContext'
import { use } from 'react'

const Navbar = () => {  
  const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>
        <h1>Dev Patel</h1>
        <Nav2 />
    </div>
  )
}

export default Navbar