import React from 'react'
import "./PopularPlace.css"
const PopularPlace = ({src,title}) => {
  return (
    <div className="component">
              <div className="layout">
                <div className="image">
                <div className="favourite">
                  <img src="/assets/Heart.svg" alt="" />
                </div>
                  <img src={src} alt={title} />
                </div>
                <div className="title">
                  <h2>{title}</h2>
                  <p>The best places you will enjoy
  and that you must visit. </p>

                <div className="stars">
                  <div className="star">
                    <img src="/assets/FilledStar.svg" alt="" />
                  </div>
                  <div className="star">
                    <img src="/assets/FilledStar.svg" alt="" />
                  </div>
                  <div className="star">
                    <img src="/assets/FilledStar.svg" alt="" />
                  </div>
                  <div className="star">
                    <img src="/assets/FilledStar.svg" alt="" />
                  </div>
                  <div className="star">
                    <img src="/assets/FilledStar.svg" alt="" />
                  </div>
                </div>
                <div className="share">
                  <h5>Share this Place</h5>
                  <div className="socials">
                    <div className="social">
                      <img src="/assets/FacebookSearch.svg"  alt="" />
                    </div>
                    <div className="social">
                      <img src="/assets/InstagramSearch.svg"  alt="" />
                    </div>
                    <div className="social">
                      <img src="/assets/TwitterSearch.svg"  alt="" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
  )
}

export default PopularPlace