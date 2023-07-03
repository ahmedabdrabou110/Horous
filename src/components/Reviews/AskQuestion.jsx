import React from 'react'
import Navbar from '../UI/Navbar'
import "./AskQuestion.css"
import Replies from './Replies'
import Footer from '../MainUI/Footer'
import { Link } from 'react-router-dom'
const AskQuestion = () => {
  return (
    <div className="ask_questions_container">
        <div className="navbar">
            <Navbar />
        </div>

        <div className="ask_question_content">
            <div className="ask_question_info">
                <h2>Q&A</h2>
                <div className="ask_information">
                    {/* <div className="replies">
                        <div className="reply_info_container">
                            <div className="reply_info_content">
                                <div className="ask">
                                    <div className="reply_details">
                                        <div className="image"></div>
                                        <h4>arnav1234</h4>
                                    </div>
                                <h2>We wii be doing the tour after arriving from the airport so will have small 
hand luggage bags, is this aloud on board?</h2>
                                </div>
                                <div className="answer">
                                    <div className="horizontal_line"></div>
                                    <div className="answer_details">
                                        <div className="answer_details_content">
                                            <div className="image"></div>
                                            <h2>selim001</h2>
                                        </div>
                                        <h2>I don't know .but there boat is but enough to accommodate a carry on bag... But if the boat is full then it might be a bit uncomfortable for some</h2>
                                    </div>

                                </div>
                            </div>
                            <button className='read_all'>
                                Read all replies
                            </button>

                        </div>
                        <div className="line"></div>
                    </div> */}
                    <Replies />
                    <Replies />
                    <Replies />
                    

                    
                </div>
            </div>

            <Link to="/reviews/see-all-reviews" className="seeall">See All</Link>
        </div>

        <footer className="footer">
            <Footer />
        </footer>
    </div>
  )
}

export default AskQuestion