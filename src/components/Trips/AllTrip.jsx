import React from 'react'
import StartedButton from './StartedButton'

const AllTrip = () => {
  return (
    <div className="create_trips">
              <div className="create_container">
                <div className="create_container_content">
                  <div className='create_content'>
                  <h2>Create your first Trip</h2>
                    <p>Save traveler-recommended places for your trip</p>
                    <p>Easily access all your saves while traveling, wherever you go</p>
                    <p>View the things to do, restaurants and hotels you saved on a map</p>
                  </div>

                </div>
                <StartedButton />
              </div>
            </div>
  )
}

export default AllTrip