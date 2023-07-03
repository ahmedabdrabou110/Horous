import React from 'react'
import "./ExploreNearBy.css"
import Navbar from '../../UI/Navbar'
import Footer from '../../MainUI/Footer'
import NearByPlaces from './NearByPlaces'
import NearByComponent from './NearByComponent'
import NearByItem from './NearByItem'

const ExploreNearBy = () => {
  return (
    <div className='nearby_container'>
      <div className="navbar">
        <Navbar />
      </div>
      <NearByPlaces />


      <div className="top_places_container">
        <div className="top_places_contents">
          <div className="top_place_giza">
            <h1>Top places in Giza </h1>
            <div className="top_place_giza_container">
              <div className="top_place_giza_container_content">
                <NearByComponent />
                <NearByComponent />
                <NearByComponent />
                <NearByComponent />
                <NearByComponent />
                
              </div>
            </div>
          </div>
          <div className="plane_for_later">
            <div className="title">
              <h1>Plan For Later</h1>
              <p>Enjoy your vacation with new places</p>
            </div>

            <div className="items_container">
              <div className="items">
                <NearByItem />
                <NearByItem />
                <NearByItem />
                <NearByItem />
                <NearByItem />
                
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <Footer />
        </footer>
      </div>

      
    </div>
  )
}

export default ExploreNearBy