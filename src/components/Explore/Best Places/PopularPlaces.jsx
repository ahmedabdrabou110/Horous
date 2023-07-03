import React from 'react'
import "./PopularPlaces.css"
import PopularPlace from './PopularPlace'
import { popularPlaces } from '../../UI/Utilits/constants'
const PopularPlaces = () => {
  return (
    <div className="popular_place">
          <h2>Popular places in Best right Now</h2>
          <div className="content">
            
            {
              popularPlaces.map(popularPlace =>(
                <PopularPlace key ={popularPlace.title} title={popularPlace.title} src ={popularPlace.src} />
              ))
            }
          </div>
        </div>
  )
}

export default PopularPlaces