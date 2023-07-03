import React from 'react'
import "./ShareTravelElement.css"
const ShareTravelElement = ({src,title}) => {
  return (
    <div className='share_element__container'>
        <div className="image">
                    <img src={src} alt={title} />
        </div>
        <p>{title}</p>
    </div>
  )
}

export default ShareTravelElement