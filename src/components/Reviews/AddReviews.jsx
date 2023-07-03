import Navbar from '../UI/Navbar'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import "./AddReviews.css"
const AddReviews = () => {
    const [value, setValue] = React.useState(0);
  return (
    <div className="addreviews_container">
        <div className="navbar">
        <Navbar />
      </div>
      <div className="addreviews_content">
        <div className="addreviews_data">
            <div className="addreviews_informations">
                <div className="details">
                    <div className="rectangle"></div>
                    <div className="info">
                        <h3>Double Tree by Hilton Hotel and Residences Dubai AI Barsha</h3>
                        <p>Dubai, United Arab Emirates</p>
                    </div>
                </div>

                <div className="rating">
                    <h3>How would you rate your experience?</h3>
                    <Box sx={{
                        '& > legend': { mt: 2 },
                    }}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                    </Box>
                </div>
                
                <div className="type_of_visit">
            <h2>Type of visit</h2>

            <div className="information">
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

            <button className="submit">
                <span>Next</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default AddReviews