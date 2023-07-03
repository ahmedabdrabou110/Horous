import React , {useContext} from 'react'
import  "./Trips.css" ;
import Navbar from '../UI/Navbar';
import TripsNavbar from './TripsNavbar';
import Footer from '../MainUI/Footer';
import { Outlet } from 'react-router-dom';
import { CreatePlanContext } from '../store/ShowPlanContext';
const Trips = () => {
  const planCtx = useContext(CreatePlanContext);
  return (
    <div className='trips_container'>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="trips_container__content">
        <div className="content">
          <h1>Trips</h1>
          <div className="trips_content">
            <div className="trips_content_navbar">
              <TripsNavbar />
            </div>
            <Outlet />
            
          </div>
        </div>
        <div className="plans">
          <h2>Plans</h2>
          <div className="content">
            <div className="plan_container">
              <div className="plan_container_content">
                  <p>You haven’t maked any plans yet</p>
                  <span>let’s start to make a plan!</span>
              </div>
              <button onClick={planCtx.showPlan}>Start saving</button>
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

export default Trips