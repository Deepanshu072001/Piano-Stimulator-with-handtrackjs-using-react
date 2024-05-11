import React from 'react'
import './Footer.css'
import  instagram  from './instagram.jpg'
import  link  from './link.jpg'

export default function Footer() {
  return (
    <div className='footerdiv'>
        <p className='footerp'>COPYRIGHT &copy; 2024</p>
        <a href="https://www.instagram.com/?hl=en" target="_blank"><img src={instagram} className='footerimage'/></a>
        <a href="https://www.linkedin.com/login" target="_blank"><img src={link} className='footerimage'/></a>
    </div>
  )
}
