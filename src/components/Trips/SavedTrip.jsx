import React from 'react'
import "./PrivateTrip.css";
import StartedButton from './StartedButton';
const SavedTrip = () => {
  return (
    <div className="private_trip">
                <div className="private_trip_container">
                  <div className='private_trip_content'>
                  <h2>You haven’t saved anything yet</h2>
                    <p>To save, search for hotels, restaurants and things to do, then tap the heart</p>
                  </div>

                </div>
                <StartedButton />
              </div>
  )
}

export default SavedTrip