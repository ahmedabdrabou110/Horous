import React from 'react'
import FourStars from '../stars/FourStars'
import FiveStars from '../stars/FiveStars'
import { Link } from 'react-router-dom'
import "./About.css"
const About = () => {
  return (
    <div className='about_container'>
        <div className="about_rating_content">
            <div className="about_title">
                <h2>About</h2>
                <div className="line"></div>
            </div>
            <div className="rating">
                <div className="rating_title">
                    <h1>4.7</h1>
                    <h3>Excellent</h3>
                </div>
                <div className="stars_rating">
                    <div>
                        <FourStars />
                    </div>
                    <p>2,007 reviews</p>
                </div>
            </div>
            <div className="about_info_container">
                <div className="about_info_content">
                    <div className="location">
                        <h3>Location</h3>
                        <div className="rating_container">
                            <div className="rating_content">
                                <div className="full"></div>
                                <div className="range"></div>
                            </div>
                            <h3>4.6</h3>
                        </div>
                    </div>
                    <div className="cleanless">
                        <h3>Cleanliness</h3>
                        <div className="rating_container">
                            <div className="rating_content">
                                <div className="full"></div>
                                <div className="range"></div>
                            </div>
                            <h3>4.6</h3>
                        </div>
                    </div>
                    <div className="service">
                        <h3>Service</h3>
                        <div className="rating_container">
                            <div className="rating_content">
                                <div className="full"></div>
                                <div className="range"></div>
                            </div>
                            <h3>4.4</h3>
                        </div>
                    </div>
                    <div className="value">
                        <h3>Value</h3>
                        <div className="rating_container">
                            <div className="rating_content">
                                <div className="full"></div>
                                <div className="range"></div>
                            </div>
                            <h3>4.3</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume_rating">
                <div className="cleanless">
                    <div className="info">
                        <h3>4.6</h3>
                        <img src="/assets/FilledStar.svg" alt="" />
                    </div>
                    <h2>Cleanliness</h2>
                </div>
                <div className="location">
                    <div className="info">
                        <h3>4.6</h3>
                        <img src="/assets/FilledStar.svg" alt="" />
                    </div>
                    <h2>Location</h2>
                </div>
                <div className="service">
                    <div className="info">
                        <h3>4.4</h3>
                        <img src="/assets/FilledStar.svg" alt="" />
                    </div>
                    <h2>Service</h2>
                </div>
                <div className="value">
                    <div className="info">
                        <h3>4.3</h3>
                        <img src="/assets/FilledStar.svg" alt="" />
                    </div>
                    <h2>Value</h2>
                </div>
            </div>
        </div>
        <div className="reviews_container">
            <div className="write_review">
                <h1>Reviews</h1>
                <Link to="">Write a review</Link>
            </div>
            <div className="line"></div>
            <div className="review_container">
                <div className="review_content">
                    <div className="first">
                    <div className="review">
                        <div className="review_info">
                            <div className="image"></div>
                            <div className="info">
                                <div className="contact">
                                    <h4>arnav1234</h4>
                                    <p>October 14, 2022</p>
                                </div>
                                <img src="/assets/More.svg" alt="" />
                            </div>
                        </div>
                        <div className="rating">
                            <FiveStars />
                            <p>Saul did excellent at la cantina with service and drinks, we recommend him for help on food choices and he was very friendly and charismatic, we enjoyed our dining experience and the live music and lanterns. </p>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review_info">
                            <div className="image"></div>
                            <div className="info">
                                <div className="contact">
                                    <h4>arnav1234</h4>
                                    <p>October 14, 2022</p>
                                </div>
                                <img src="/assets/More.svg" alt="" />
                            </div>
                        </div>
                        <div className="rating">
                            <FiveStars />
                            <p>Saul did excellent at la cantina with service and drinks, we recommend him for help on food choices and he was very friendly and charismatic, we enjoyed our dining experience and the live music and lanterns. </p>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="review">
                        <div className="review_info">
                            <div className="image"></div>
                            <div className="info">
                                <div className="contact">
                                    <h4>arnav1234</h4>
                                    <p>October 14, 2022</p>
                                </div>
                                <img src="/assets/More.svg" alt="" />
                            </div>
                        </div>
                        <div className="rating">
                            <FiveStars />
                            <p>Saul did excellent at la cantina with service and drinks, we recommend him for help on food choices and he was very friendly and charismatic, we enjoyed our dining experience and the live music and lanterns. </p>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review_info">
                            <div className="image"></div>
                            <div className="info">
                                <div className="contact">
                                    <h4>arnav1234</h4>
                                    <p>October 14, 2022</p>
                                </div>
                                <img src="/assets/More.svg" alt="" />
                            </div>
                        </div>
                        <div className="rating">
                            <FiveStars />
                            <p>Saul did excellent at la cantina with service and drinks, we recommend him for help on food choices and he was very friendly and charismatic, we enjoyed our dining experience and the live music and lanterns. </p>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div className="view_all">
                    <Link to=""> View 1,230 Reviews </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About