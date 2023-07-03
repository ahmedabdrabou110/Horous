import React from 'react'
import "./Createtrip.css";
const CreateTrip = () => {
  return (
    <div className='create_trip_container'>
        <form className="trip">
            <h2>Create a trip</h2>
            <input type="text" placeholder='Trip Name' />
        </form>
        <div className="trip_content">
            <p>Choose who can see your trip</p>
            <div className="choose">
                <div className="item">
                    <input type='checkbox' className="check" />
                    <div className="item_content">
                        <h2>Private</h2>
                        <p>Not visible to other HoRus users and members, except for you and any friends with whom you share your Trip. </p>
                    </div>
                </div>
                <div className="item">
                    <input type='checkbox' className="check" />
                    <div className="item_content">
                        <h2>Public</h2>
                        <p>Visible to all travelers on Tripadvisor, including any friends you share your Trip with</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateTrip