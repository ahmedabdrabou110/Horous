import React from 'react'
import "./ShareTravel.css"
import ShareTravelElement from './ShareTravelElement'
import { shareTravelItems } from '../UI/Utilits/constants'
const ShareTravel = () => {
  return (
    <div className="share_info">
        <p>Share your Travel</p>

        <div className="share_info__container">
            {
                shareTravelItems.map(item => (
                    <ShareTravelElement key={item.src} src={item.src} title={item.title} />
                ))
            }
        </div>
    </div>
  )
}

export default ShareTravel