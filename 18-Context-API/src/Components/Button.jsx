import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {
    const [theme,setTheme]= useContext(ThemeDataContext)
    const changeTheme = () =>{
     setTheme('Dark')
     
    }
  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button