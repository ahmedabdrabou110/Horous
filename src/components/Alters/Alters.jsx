import React from 'react'
import "./Alters.css";
import { NavLink } from 'react-router-dom';
import Navbar from '../UI/Navbar';
import Footer from '../MainUI/Footer';

const Alters = () => {
    const NavLinkStyle = ({isActive}) =>{
        return {
            fontWeight:isActive ? "bolder" : "normal" ,
            background:isActive? "#FF9D55" : "transparent" ,
            padding:"15px",
            color:isActive?"white":"black",
            fontSize:"20px",
            borderRadius:"5px",
            

        }
    }
  return (
    <div className="alter_container">
        <div className="navbar">
        <Navbar />
      </div>
      <div className="alter_inbox_container">
        <h1>
            inbox
        </h1>
        <div className="alter_navbar">
            <div className="line"></div>
            <div className="links">
                <NavLink style={NavLinkStyle} to="newest">
                    Newest
                </NavLink>
                <NavLink style={NavLinkStyle} to="unread">
                    Unread
                </NavLink>
                <NavLink style={NavLinkStyle} to="archive">
                    Archive
                </NavLink>
            </div>
            <div className="line"></div>
        </div>
        <h2>No alerts or messages at this time</h2>
      </div>
      <footer className="footer">
            <Footer />
          </footer>
    </div>
  )
}

export default Alters