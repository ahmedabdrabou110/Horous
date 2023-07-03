import React from 'react'
import "./Replies.css"
import Answer from './Answer'
const Replies = () => {
  return (
    <div className="replies">
                        <div className="reply_info_container">
                            <div className="reply_info_content">
                                {/* <div className="ask">
                                    <div className="reply_details">
                                        <div className="image"></div>
                                        <h4>arnav1234</h4>
                                    </div>
                                <h2>We wii be doing the tour after arriving from the airport so will have small 
hand luggage bags, is this aloud on board?</h2>
                                </div> */}
                                <Answer />
                                <div className="answer">
                                    <div className="horizontal_line"></div>
                                    <div className="answer_details">
                                        <div className="answer_details_content">
                                            <div className="image"></div>
                                            <h2>selim001</h2>
                                        </div>
                                        <h2>I don't know .but there boat is but enough to accommodate a carry on bag... But if the boat is full then it might be a bit uncomfortable for some</h2>
                                    </div>

                                A</div>
                            </div>
                            <button className='read_all'>
                                Read all replies
                            </button>

                        </div>
                        <div className="line"></div>
                    </div>
  )
}

export default Replies