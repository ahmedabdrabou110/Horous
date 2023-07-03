import React from 'react'
import "./EventMain.css"
const EventMain = () => {
  return (
    <div className="event__main">
      <div className="layout"></div>
      <div className="content">
        <div className="event__header">
            <h1>Do not miss the <br /> Egyption event</h1>
        </div>
        <div className="event_paragraph">
            <p>
                The transfer of the Egyptian <br /> mummy is happening now
            </p>
        </div>
        <div className="read__more">
            <button>Read more </button>
        </div>
      </div>
    </div>
  )
}

export default EventMain
