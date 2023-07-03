import React from 'react'
import "./PlaceComponent.css"
const PlaceComponent = () => {
  return (
    <div className="place_container">
        <div className="image">
            <div className="favourite">
                <img src="/assets/Heart.svg" alt="Heart" />
            </div>
            <img src="/assets/Sphinx.svg" alt="sphinx" />
        </div>
        <div className="title">
            <div className="paragraph">
                <h1>
                    Sphinx & Pyramids
                </h1>
                <p>One of the best places to visit in Egypt and where you feel enjoyment and pleasure, so you should visit it soon</p>
            </div>
        </div>
    </div>
  )
}

export default PlaceComponent