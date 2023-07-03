import React from 'react'
import "./BottonNavbar.css"
import { BottomLinks  } from './Utilits/constants'
import BottomNavbarLink from './BottomNavbarLink'
const BottomNavbar = () => {
  return (
    <div className='bottom-navbar__container'>
      {
        BottomLinks.map(item => (
            <BottomNavbarLink key={item.title} src={item.src} title ={item.title} /> 
        ))
      }
    </div>
  )
}

export default BottomNavbar
