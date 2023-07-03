import React from 'react'
import Navbar from '../UI/Navbar'
import About from './About'
import Footer from '../MainUI/Footer'
import "./Museum.css"
const Hotels = () => {
  return (
    <div className="museum_container">
        <div className="navbar">
            <Navbar />
        </div>

            <div className="logo_container">
                <div className="heart">
                    <img src="/assets/heart.svg" alt="heart" />
                </div>
                <img className='museum_logo' src="/assets/Hotel Logo.svg" alt="" />
            </div>
        <div className="museum_content">
                        <div className="details_info">
                                <div className="info">
                                    <h3>Double Tree by Hilton Hotel and Residences Dubai AI Barsha</h3>
                                    <div className="details">
                                        <div className="recommended">
                                        <div className="image">
                                            <img src="/assets/heart.svg" alt="heart" />
                                        </div>
                                        <p>Recommended by 97% of travelers</p>
                                        </div>
                                        
                                        
                                    </div>
                                    <h2>
                                        Set in the vibrant AI Barsha area - Dubai’s word-class shopping, entertainment and dining hun, the contemporary Double Tree by
                                    </h2>
                                    
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
                                    <div className="wifi">
                                        <img src="/assets/Wifi.svg" alt="" />
                                        <h3>Free High Speed Internet (WiFi)</h3>
                                    </div>
                                    <div className="services">
                                        <img src="/assets/Shuttle.svg" alt="" />
                                        <h3>Free shuttle or taxi services</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="instructions">
                                <h2>Instructions</h2>
                                <div className="instructions_details_container">
                                    <div className="instructions_details_content">
                                        <div className="info">
                                            <h4>Last date to buy tickets</h4>
                                            <p>Ticket office closes 4:30 pm</p>
                                        </div>
                                        <div className="info">
                                            <h4>Last date to buy tickets</h4>
                                            <p>Ticket office closes 4:30 pm</p>
                                        </div>
                                        <div className="info">
                                            <h4>Last date to buy tickets</h4>
                                            <p>Ticket office closes 4:30 pm</p>
                                        </div>
                                        <div className="info">
                                            <h4>Last date to buy tickets</h4>
                                            <p>Ticket office closes 4:30 pm</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <About />
                    </div>
                    
                
            
       
        <footer className="footer">
            <Footer />
        </footer>
    </div>
  )
}

export default Hotels