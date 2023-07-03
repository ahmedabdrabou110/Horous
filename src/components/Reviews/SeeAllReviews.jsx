import React from 'react'
import Navbar from '../UI/Navbar'
import Answer from './Answer'
import "./SeeAllReviews.css"
import SeeAllReply from './SeeAllReply'
import Footer from '../MainUI/Footer'
const SeeAllReviews = () => {
  return (
    <div className='seeall_container'>
        <div className="navbar">
            <Navbar />
        </div>

        <div className="seeall_content_container">
            <div className="seeall_content">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                
            </div>
            <SeeAllReply />
        </div>
        <footer className="footer">
            <Footer />
        </footer>
    </div>
  )
}

export default SeeAllReviews