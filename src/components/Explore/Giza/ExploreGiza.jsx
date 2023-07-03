import React from 'react'
import "./ExploreGiza.css"
import Navbar from '../../UI/Navbar'
import ExploreContent from './ExploreContent'
import Preview from './Preview'
import ExploreTitle from '../Explore UI/ExploreTitle'
import PlaceComponents from '../Explore UI/PlaceComponents'
import DiscoverTitle from './DiscoverTitle'
import PlaceVists from '../Explore UI/PlaceVists'
import EventMain from '../../MainUI/EventMain'
import GizaPlanTitle from '../Explore UI/GizaPlanTitle'
import GizaPlanComponents from '../Explore UI/GizaPlanComponents'
import PlanLaterTitle from '../Explore UI/PlanLaterTitle'
import PlanLaterComponents from '../Explore UI/PlanLaterComponents'
import Footer from '../../MainUI/Footer'

const ExploreGiza = () => {
  return (
    <div className='explore_giza_container'>  
      <div className="navbar">
        <Navbar />
      </div>
      <div className="explore_links_container">
        <ExploreContent  />
      </div>
      <div className="preview_container">
        <div className="preview_content">
          <Preview />
        <div className='top_place_container'>
          <ExploreTitle title="Giza" />
          <div className="components_container">
            <PlaceComponents />
          </div>
          <div className="discover_container">
            <DiscoverTitle title="Giza" />
            <div className="place_vist_container">
              <PlaceVists />
            </div>
          </div>
          <div className="giza_event">
            <EventMain />
          </div>
          <div className="giza_plan_container">
            <GizaPlanTitle/>
            <div className="giza_plan_components">
              <GizaPlanComponents />
            </div>
          </div>
          <div className="plan_later_container">
            <PlanLaterTitle />
            <div className="plan_later_components">
              <PlanLaterComponents />
            </div>
          </div>
        </div>
        </div>

        <footer className="footer">
          <Footer />
        </footer>

      </div>
    </div>
  )
}

export default ExploreGiza