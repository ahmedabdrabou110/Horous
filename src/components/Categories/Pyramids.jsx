import React from 'react'
import Navbar from '../UI/Navbar'
import FiveStars from '../stars/FiveStars';
import Footer from '../MainUI/Footer';

const Pyramids = () => {
  return (
    <div className="museum_container">
        <div className="navbar">
            <Navbar />
        </div>

            <div className="logo_container">
                <div className="heart">
                    <img src="/assets/heart.svg" alt="heart" />
                </div>
                <img className='museum_logo' src="/assets/Pyramids.svg" alt="" />
            </div>
        <div className="museum_content">
                        <div className="details_info">
                                <div className="info">
                                    <h3>Pyramids & Sphinx</h3>
                                    <div className="details">
                                        <div className="recommended">
                                        <div className="image">
                                            <img src="/assets/heart.svg" alt="heart" />
                                        </div>
                                            <p>Recommended by 97% of travelers</p>
                                        </div>
                                    </div>
                                    <h2>A pyramid's design, with the majority of the weight closer to the ground[3] and with the pyramidion at the apex, means that less material higher up on the pyramid will be pushing down from above. This distribution of weight allowed early civilizations to create stable monumental structures.</h2>
                                    
                                </div>
                            <div className="dest">
                                <div className="get_there">
                                    <h2>How to get there</h2>
                                    <div className="info">
                                        <p>Dubai Airport . 23 km</p>
                                        <p>Dubai World Central - AI Maktoum</p>
                                        <p>International Airport . 22 km</p>
                                        <p>Mall of the Emirates . 9 min walk</p>
                                        <p>Sharaf DG . 13 min walk</p>
                                    </div>
                                </div>
                                <div className="amenities_content">
                                    <h2>Instructions</h2>
                                    <div className="amenities">
                                        <img src="/assets/Danger.svg" alt="" />
                                        <h3>Amenities</h3>
                                    </div>
                                    <div className="parking">
                                        <img src="/assets/Parking.svg" alt="" />
                                        <h3>Free parking</h3>
                                    </div>
                                    <div className="kids">
                                        <img src="/assets/Kids.svg" alt="" />
                                        <h3>Kids stay free</h3>
                                    </div>
                                    
                                    <div className="services">
                                        <img src="/assets/Shuttle.svg" alt="" />
                                        <h3>Free shuttle or taxi services</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="line"></div>
                </div>
                    <div className="popular_places_continer">
                        <h1>Things To Do In Cairo?</h1>
                        <div className="popular_places_content">
                            <div className="popular_container">
                                <img className='logo' src="/assets/Pyramids.svg" alt="" />
                                <div className="popular_content">
                                    <h2>Private Tour to Giza Pyramids and The Egyptian Museum</h2>
                                    <h4>Explore Ancient Egypt all in one day. Take in the Giza Pyramids of Cheops, Chephren and Mykreinus </h4>
                                    <div className="rating">
                                        <div>
                                            <FiveStars />
                                        </div>
                                        <p>5,651 reviewers</p>
                                    </div>
                                    <div className="price">
                                        <p>From </p>
                                        <h4>140.00$</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="popular_container">
                                <img className='logo' src="/assets/Pyramids.svg" alt="" />
                                <div className="popular_content">
                                    <h2>Private Tour to Giza Pyramids and The Egyptian Museum</h2>
                                    <h4>Explore Ancient Egypt all in one day. Take in the Giza Pyramids of Cheops, Chephren and Mykreinus </h4>
                                    <div className="rating">
                                        <div>
                                            <FiveStars />
                                        </div>
                                        <p>5,651 reviewers</p>
                                    </div>
                                    <div className="price">
                                        <p>From </p>
                                        <h4>140.00$</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="popular_container">
                                <img className='logo' src="/assets/Pyramids.svg" alt="" />
                                <div className="popular_content">
                                    <h2>Private Tour to Giza Pyramids and The Egyptian Museum</h2>
                                    <h4>Explore Ancient Egypt all in one day. Take in the Giza Pyramids of Cheops, Chephren and Mykreinus </h4>
                                    <div className="rating">
                                        <div>
                                            <FiveStars />
                                        </div>
                                        <p>5,651 reviewers</p>
                                    </div>
                                    <div className="price">
                                        <p>From </p>
                                        <h4>140.00$</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="popular_container">
                                <img className='logo' src="/assets/Pyramids.svg" alt="" />
                                <div className="popular_content">
                                    <h2>Private Tour to Giza Pyramids and The Egyptian Museum</h2>
                                    <h4>Explore Ancient Egypt all in one day. Take in the Giza Pyramids of Cheops, Chephren and Mykreinus </h4>
                                    <div className="rating">
                                        <div>
                                            <FiveStars />
                                        </div>
                                        <p>5,651 reviewers</p>
                                    </div>
                                    <div className="price">
                                        <p>From </p>
                                        <h4>140.00$</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="popular_container">
                                <img className='logo' src="/assets/Pyramids.svg" alt="" />
                                <div className="popular_content">
                                    <h2>Private Tour to Giza Pyramids and The Egyptian Museum</h2>
                                    <h4>Explore Ancient Egypt all in one day. Take in the Giza Pyramids of Cheops, Chephren and Mykreinus </h4>
                                    <div className="rating">
                                        <div>
                                            <FiveStars />
                                        </div>
                                        <p>5,651 reviewers</p>
                                    </div>
                                    <div className="price">
                                        <p>From </p>
                                        <h4>140.00$</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <footer className="footer">
            <Footer />
        </footer>
                </div>
  )
}

export default Pyramids