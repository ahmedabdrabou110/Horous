import React from 'react'
import "./ExploreBestPlaces.css"
import Navbar from '../../UI/Navbar'
import Footer from '../../MainUI/Footer';
import ExploreBestPlaceLogo from './ExploreBestPlaceLogo';
import RatingContainer from './RatingContainer';
import PopularPlaces from './PopularPlaces';
const ExploreBestPlaces = () => {
  return (
      <div className='explore_best_place_container'>
        <div className="navbar_best_place">
          <Navbar />
        </div>
        
        <ExploreBestPlaceLogo />

        <div className="popular_place_container">
        <RatingContainer />

        <PopularPlaces />
        <footer className="footer">
          <Footer />
        </footer>
        </div>

        

        
      </div>
  );
}

export default ExploreBestPlaces