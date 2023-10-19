import React from 'react'
import '../styles/_notFound.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <section className='notFound'>
        <h1>404 <span>This page could not be found.</span></h1>
        <img src="https://asaxiy.uz/custom-assets/images/murad-animate-gif.gif" alt="" />
        <button onClick={()=>navigate('/')}>Главная страница</button>
    </section>
  )
}

export default NotFound