import React from 'react'
import "./RatingContainer.css"
import FiveStars from '../../stars/FiveStars'
import FourStars from '../../stars/FourStars'
import ThreeStars from '../../stars/ThreeStars'
import TwoStars from '../../stars/TwoStars'
import OneStars from '../../stars/OneStars'
const RatingContainer = () => {
  return (
    <div className="rating_container">
          <div className="map"></div>
          <div className="traveller_rating">
            <div className="traveller_rating_content">
              <h2>Traveler Rating</h2>
              <div className="rates">
                <div className="rate">
                  <input type="checkbox" name="" id="" />
                  <FiveStars />
                </div>
                <div className="rate">
                  <input type="checkbox" name="" id="" />
                  <FourStars />
                </div>
                <div className="rate">
                  <input type="checkbox" name="" id="" />
                  <ThreeStars />
                </div>
                <div className="rate">
                  <input type="checkbox" name="" id="" />
                  <TwoStars />
                </div>
                <div className="rate">
                  <input type="checkbox" name="" id="" />
                  <OneStars />
                </div>
              </div>
            </div>
          </div>
          <div className="style_container">
            <div className="style_container_content">
              <h2>Style</h2>
              <div className="style_theme">
                <input type="checkbox" name="" id="" />
                <p>Mid-Range</p>
              </div>
              <div className="style_theme">
                <input type="checkbox" name="" id="" />
                <p>Family-Frindly</p>
              </div>
              <div className="style_theme">
                <input type="checkbox" name="" id="" />
                <p>Romantic</p>
              </div>
            </div>
        </div>
        </div>
  )
}

export default RatingContainer