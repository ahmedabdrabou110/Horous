import React from 'react'
import "./RegestrationButton.css"
const RegestraionButton = ({src , title}) => {
  return (
    <>
        <button className='regestration_button'>
            <img src={src} alt={title} />
            <h3 className={`${title === "Facebook" ? "facebook" : null}`}>Continue with {title}</h3>
        </button>
    </>
  )
}

export default RegestraionButton