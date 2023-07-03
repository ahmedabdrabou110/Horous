import React from 'react'
import "./NearByComponent.css"
const NearByComponent = () => {
  return (
    <div className="top_place_component">
                  <div className="image">
                    <div className="favourite">
                      <img src="/assets/Heart.svg" alt="Heart" />
                    </div>
                    <img src="/assets/Sphinx&Pyramids.svg" alt="sphinx" />
                  </div>
                  <div className="title">
                    <div className="paragraph">
                      <p>Sphinx & Pyramids</p>
                    </div>
                    <p>One of the best places to visit in Egypt and where you feel enjoyment and pleasure, so you should visit it soon</p>
                  </div>
                </div>
  )
}

export default NearByComponent