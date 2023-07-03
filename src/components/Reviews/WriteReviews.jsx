import React from 'react'
import Navbar from '../UI/Navbar'
import "./WriteReviews.css";
const WriteReviews = () => {
  return (
    <div className="writereviews_container">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="writereviews_content">
            <div className="addreviews_data">
            <div className="addreviews_informations">
                <div className="details">
                    <div className="rectangle"></div>
                    <div className="info">
                        <h3>Double Tree by Hilton Hotel and Residences Dubai AI Barsha</h3>
                        <p>Dubai, United Arab Emirates</p>
                    </div>
                </div>

                 <div className="leave_review">
                    <div className="leave_review_content">
                        <h2>Leave a review(requied)</h2>
                    <textarea placeholder='Write your review...'>
                    </textarea>
                    </div>
                    <div className="required_text">
                        <span>100 characters requied</span>
                    </div>
                 <div className="line"></div>
                 </div>

                 <div className="review_title">
                    <h2>Give your review a little(requied)</h2>
                    <textarea placeholder='Summarize your experience'>
                    </textarea>
                 </div>
                 <div className="upload_photo">
                    <div className="upload_content">
                        <h2>Upload a photo</h2>
                        <div className="upload">
                            <input type="file" />
                        </div>
                    </div>
                    <div className="line"></div>
                 </div>
                 <div className="checkout">
                    <input type="checkbox"/>
                    <p>I certify that this review is based on my own experience and is my genuine opinion of this establishment and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero-tolerance policy on fake reviews. 
                    </p>
                 </div>
                </div>
                </div>
                 <div className="button_container">
                    <div className="submit">
                        
                            <button>   Submit your review</button>
                        
                    </div>
                    <div className="preview">
                        <button>Preview your review</button>
                    </div>
                 </div>
        </div>
    </div>
  )
}

export default WriteReviews