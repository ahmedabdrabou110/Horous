import React from 'react'
import "./ExploreTitle.css"

const ExploreTitle = ({title}) => {
  return (
    <div className="title_container">
        <h1>Top places in {title} </h1>
        <p>Here’s where your fellow travellers are headed</p>
    </div>
  )
}

export default ExploreTitle