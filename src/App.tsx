import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Profile from './pages/Profile'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import Branches from './pages/Branches'
import Branch from './pages/Branch'
import './styles/_loader.scss'
import Cart from './components/Cart'



const App = () => {
  const fakeToken=localStorage.getItem("uuidMaxWay")
 
  return (
    <>
    <ShoppingCartProvider>
      
      
      <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/user/my-profile' element={<Profile/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/branches' element={<Branches/>}/>
          <Route path='/branches/:id' element={<Branch/>}/>
          <Route path='*'  element={<NotFound/>}/>
        </Routes> 
        <Cart/>
      <Footer/>
      </>
      
      </ShoppingCartProvider>
    </>
  )
}

export default App