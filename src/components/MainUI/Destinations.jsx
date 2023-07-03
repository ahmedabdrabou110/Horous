import React from 'react'
import "./Destinations.css"
import Destination from './Destination';
import { destination } from '../UI/Utilits/constants';
const Destinations = () => {
  return (
    <div className='destinations__container'>
      <div className="content">
        <h1>
            Top destinations for your next holiday
        </h1>

        <p>
            Here’s where your fellow travellers are headed
        </p>
      </div>

      <div className="detination_groups">
        {
          destination.map(dest => (
            <Destination key={dest.title} src={dest.src} title={dest.title}/>
          ))
        }
      </div>
    </div>
  )
}

export default Destinations
