import React, { useContext } from 'react'
import Navbar from '../UI/Navbar'
import "./index.css"
import SearchBar from '../UI/SearchBar'
import BottomNavbar from '../UI/BottomNavbar'
import EventMain from '../MainUI/EventMain'
import Destinations from '../MainUI/Destinations'
import Experience from '../MainUI/Experience'
import Footer from '../MainUI/Footer'
import { AccountContext } from '../store/ShowAccountContext'

const Index = () => {
  const profileCtx = useContext(AccountContext)
  return (
    <div>
      <div className='container'>
        <div className="layout" onClick={profileCtx.closeAccount} ></div>
        <Navbar  />
        <div className="content">
          <h1>Enjoy Your Vacation With Us</h1>
        </div>
        <SearchBar />
        <BottomNavbar />
    </div>
    <div className='event'>
      <div className="layout"></div>
      <EventMain  />
    </div>
    <div className="destination">
      <Destinations />
    </div>
    <div className="event__soon">
      <EventMain />
    </div>
    <div className="experience">
      <Experience />
    </div>
    <footer className='footer_main'>
      <Footer />
    </footer>
    </div>
  )
}

export default Index
