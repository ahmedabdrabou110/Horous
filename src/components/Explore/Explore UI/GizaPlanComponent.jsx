import React from 'react'
import "./GizaPlanComponent.css"
const GizaPlanComponent = () => {
  return (
    <div className='giza_plan_component'>
        <div className="image">
            <div className="favourite">
                <img src="/assets/Heart.svg" alt="Heart" />
            </div>
                <img src="/assets/GamelRide.svg" alt="gamel" />
        </div>
        <div className="title">
            <div className="paragraph">
                <h2>Gamel Ride</h2>
            </div>
            <p>One of the best places to visit in Egypt and where you feel enjoyment and pleasure, so you should visit it soon</p>
        </div>
    </div>
  )
}

export default GizaPlanComponent