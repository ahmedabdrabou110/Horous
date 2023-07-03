import React from "react";
import Navbar from "../UI/Navbar";
import OneStars from "../stars/OneStars";
import TwoStars from "../stars/TwoStars";
import ThreeStars from "../stars/ThreeStars";
import FourStars from "../stars/FourStars";
import FiveStars from "../stars/FiveStars";
import "./Filters.css";
const Filters = () =>{
  return (
    <div className="filters_container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="filters_content">
        <div className="travelling_data">
          <div className="travelling_rate">
            <h2>Traveller rating </h2>
            <div className="stars">
              <div className="first">
                <div className="review">
                  <OneStars />
                </div>
                <div className="review">
                  <TwoStars />
                </div>
                <div className="review">
                  <ThreeStars />
                </div>
              </div>
              <div className="second">
                <div className="review">
                  <FourStars />
                </div>
                <div className="review">
                  <FiveStars />
                </div>
              </div>
            </div>
          </div>

          <div className="review_data">
            <h2>Review data</h2>
            <div className="review_date">
              <div className="first">
                <div className="review">
                  All reviews
                </div>
                <div className="review">
                  Last 3 months
                </div>
              </div>
              <div className="second">
                <div className="review">
                  Last 6 months
                </div>
                <div className="review">
                  Last 6 months
                </div>
              </div>
          <div className="type_of_visit">
            <h2>Type of visit</h2>

            <div className="first">
              <div className="review">
                Business
              </div>
              <div className="review">
                Couple
              </div>
              <div className="review">
                Family
              </div>
            </div>
            <div className="second">
              <div className="review">
                Frinds
              </div>
              <div className="review">
                Solo
              </div>
            </div>
          </div>
            </div>
          </div>


        </div>

        <div className="clear_filter">
          <h2>Clear filter</h2>
          <div className="show_review">
            <span>
              Show reviews 
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters ;
