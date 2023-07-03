import React from 'react'
import "./PrivateTrip.css"
import StartedButton from './StartedButton'
const PublicTrip = () => {
  return (
    <div className="private_trip">
                <div className="private_trip_container">
                  <div className='private_trip_content'>
                  <h2>You haven’t create any public trips</h2>
                    <p>Share your travel advice with the world! Create your first public Trip</p>
                  </div>

                </div>
                <StartedButton />
              </div>
  )
}

export default PublicTrip