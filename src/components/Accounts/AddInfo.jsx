import React from 'react'
import "./AddInfo.css" 
const AddInfo = ({src , title}) => {
  return (
    <div className='add_info__container'>
        <div className="content">
            <img src={src} alt={title} />
        <p>{title}</p>
        </div>
    </div>
  )
}

export default AddInfo