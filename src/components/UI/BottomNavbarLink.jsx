import React from 'react'
import "./BottomNavbarLink.css"
interface types {
    src:string ,
    title:string
}
const BottomNavbarLink = (props:types) => {
  return (
    <button className='navbottom_button'>
      <img src={props.src} alt ={props.title} />
      {props.title}
    </button>
  )
}

export default BottomNavbarLink
