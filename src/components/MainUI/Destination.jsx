import React from 'react'
import "./Destination.css"
const Destination = ({src , title}) => {
  return (
    <div className='destination__group__container'>
      <div className="layout"></div>
        <img src={src} alt={title} />
        <h1>{title}</h1>
        <div className="heart">
            <img src="/assets/heart.svg" alt="heart" />
        </div>
    </div>
  )
}

export default Destination