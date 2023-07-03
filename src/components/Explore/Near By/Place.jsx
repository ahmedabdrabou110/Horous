import React from 'react'
import "./Place.css"
const Place = ({src, title}) => {
  return (
    <div className="place">
            <div className="content">
              <img src={src} alt={title} />
            <p>{title}</p>
            </div>
          </div>
  )
}

export default Place