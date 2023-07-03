import React from 'react'
import "./PrivateTrip.css" ;
import StartedButton from './StartedButton';
const PrivateTrip = () => {
  return (
    <div className="private_trip">
                <div className="private_trip_container">
                  <div className='private_trip_content'>
                  <h2>You haven’t create any private trips</h2>
                    <p>Have great travel ideas? Bring them together by creating your first private Trip today!</p>
                  </div>

                </div>
                <StartedButton />
              </div>
  )
}

export default PrivateTrip