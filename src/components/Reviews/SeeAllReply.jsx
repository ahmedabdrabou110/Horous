import React from 'react'
import "./SeeAllReply.css"
const SeeAllReply = () => {
  return (
    <div className="seeall_reply_container">
        <div className="seeall_reply_content">
            <div className="reply_details">
                <div className="image"></div>
                <h4>arnav1234</h4>
            </div>
            <div className="info">
                <textarea placeholder='what is your question?'></textarea>
                <div className="check">
                    <div className="check_info">
                        <input type="checkbox" />
                        <p>Get notified about new answers to your questions.</p>
                    </div>
                    <p>0/2000 minimum characters</p>
                </div>
                <div className="buttons">
                    <button className="ask">ask</button>
                    <button className="cancel">cancel</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SeeAllReply