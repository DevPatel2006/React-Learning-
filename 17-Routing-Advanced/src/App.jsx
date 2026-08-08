import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Women from './Pages/Women'
import Men from './Pages/Men'
import Course from './Pages/Course'
import CourseDetail from './Pages/CourseDetail'
import Navbar2 from './Components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar/>
      <Navbar2/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product' element={<Product/>}>
          <Route path='/product/men' element={<Men/>} />
          <Route path='/product/women' element={<Women/>} />
          </Route>
          <Route path='/course' element={<Course/>} />
          <Route path='/course/:id' element={<CourseDetail/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App