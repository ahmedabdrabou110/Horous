import React from 'react'
import "./NavbarAccount.css"
import {  NavLink } from 'react-router-dom';
const NavbarAccount = () => {
    const NavLinkStyle = ({isActive}) =>{
        return {
            fontWeight:isActive ? "bolder" : "normal" ,
            color:isActive? "#FF9D55" : "black" ,

        }
    }
  return (
    <>
        <nav className='navbar__account'>
        <NavLink style={NavLinkStyle} to="/account/view-profile/activityfeed" >
            Activity Feed 
        </NavLink>
        <NavLink style={NavLinkStyle} to="/account/view-profile/trips">
            Trips
        </NavLink>

        <NavLink style={NavLinkStyle} to="/account/view-profile/photos">
            Photos
        </NavLink>

        <NavLink style={NavLinkStyle} to="/account/view-profile/review">
            Reviews
        </NavLink>
    </nav>
    </>
  )
}

export default NavbarAccount