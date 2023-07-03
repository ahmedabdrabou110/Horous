import React from 'react'
import "./NearByPlaces.css"
import { BottomLinks } from '../../UI/Utilits/constants'
import Place from './Place'
const NearByPlaces = () => {
  return (
    <div className="nearby_places">
        <h1>Nearby</h1>
        <div className="navbar_nearby_places">
          {
            BottomLinks.map(link => (
                <Place key ={link.src} src={link.src} title={link.title} />
            ))
          }
          
        </div>
      </div>
  )
}

export default NearByPlaces