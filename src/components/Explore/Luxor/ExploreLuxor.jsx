import React from 'react'
import "./ExploreLuxor.css"
import Navbar from '../../UI/Navbar'
import ExploreContent from './ExploreContent'
import Preview from './Preview'
import ExploreTitle from '../Explore UI/ExploreTitle'
import PlaceComponents from '../Explore UI/PlaceComponents'
import DiscoverTitle from '../Giza/DiscoverTitle'
import PlaceVists from '../Explore UI/PlaceVists'
import EventMain from '../../MainUI/EventMain'
import GizaPlanTitle from '../Explore UI/GizaPlanTitle'
import GizaPlanComponents from '../Explore UI/GizaPlanComponents'
import PlanLaterTitle from '../Explore UI/PlanLaterTitle'
import PlanLaterComponents from '../Explore UI/PlanLaterComponents'
import Footer from '../../MainUI/Footer'
const ExploreLuxor = () => {
  return (
    <div className='explore_luxor_container'>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="explore_link_container">
        <ExploreContent  />
      </div>
      <div className="preview_container">
        <div className="preview_content">
          <Preview />
          <div className="top_place_container">
            <ExploreTitle title="Luxor" />

            <div className="components_container">
              <PlaceComponents />
            </div>
          <div className="discover_container">
            <DiscoverTitle title="Luxor" />
            <div className="place_vist_container">
              <PlaceVists />
            </div>
          </div>
          <div className="luxor_event">
            <EventMain />
          </div>
          <div className="luxor_plan_container">
            <GizaPlanTitle />
            <div className="luxor_plan_components">
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
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  )
}

export default ExploreLuxor