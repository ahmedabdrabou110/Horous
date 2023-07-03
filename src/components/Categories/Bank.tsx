import React from 'react'
import Navbar from '../UI/Navbar'
import Footer from '../MainUI/Footer'
import "./Museum.css"
const Bank = () => {
    return (
        <div className="museum_container bank">

            <div className="navbar">
                <Navbar />
            </div>

            <div className="logo_container">
                <div className="heart">
                    <img src="/assets/heart.svg" alt="heart" />
                </div>
                <img className='museum_logo' src="/assets/Bank Logo.svg" alt="" />
            </div>
            <div className="museum_content">
                <div className="details_info">
                    <div className="info">
                        <h3>Cairo Bank</h3>
                        <div className="details">
                            <div className="open">
                                <img src="/assets/Open.svg" alt="open" />
                                <p>Opens 8:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                        <h2>
                        Cairo Bank is an Egyptian bank headquartered in Cairo. The bank operates a network of branches and units spread all over the Arab Republic of Egypt.
                        </h2>
                        <div className="address">
                            <h3>Address</h3>
                            <p>1024 Cameron St Corner of Cameron and Henry, Alexandria, VA 22314-2427</p>
                        </div>
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
                        
                    </div>
                    
                </div>
                
            </div>




            <footer className="footer footer_bank">
                <Footer />
            </footer>
        </div>
    )
}

export default Bank