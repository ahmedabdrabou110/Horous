import React, { useContext} from 'react'
import {NavLink} from "react-router-dom" ;
import "./Navbar.css"
import { AccountContext } from '../store/ShowAccountContext';
import { AuthContext } from '../store/AuthContextProvider';
import { LoginContext } from '../store/ShowLoginProvider';



const Navbar = () => {

    const {user} = useContext(AuthContext);
    // console.log(user)
    
    const NavLinkStyle = ({isActive}) =>{
        return {
            fontWeight:isActive ? "bolder" : "normal" ,
            backgroundColor:isActive? "#FF9D55" : "transparent" , 

        }
    }

    
    const profileCtx = useContext(AccountContext);
    const loginCtx = useContext(LoginContext);
    

    const closeHandle = (event) => {
        event.preventDefault();
        profileCtx.showAccount();
    }
  return (


    <section className='navbar-container'>
        <NavLink className="logo" to="/">
            <img src="/assets/Logo.svg" alt="Logo" />
            <h1>HoRus</h1>
        </NavLink>
        <nav className="links">
            <NavLink style={NavLinkStyle}  to="/home">
                Home
            </NavLink>
            <NavLink style={NavLinkStyle} to="/trips">
                Trips
            </NavLink>
            <NavLink style={NavLinkStyle} to="/alters">
                Alters
            </NavLink>
            <NavLink style={NavLinkStyle} to="/community">
                Community
            </NavLink>
            <NavLink style={NavLinkStyle} to="/reviews">
                Reviews
            </NavLink>
           

           {
                !user && <NavLink style={NavLinkStyle}  onClick={loginCtx.showLogin}>
               sign in
            </NavLink> 
           }

            {
                user && <NavLink style={NavLinkStyle}  to="/account" onClick={closeHandle}>
                Account
            </NavLink>
            
            }

            

           
        </nav>
        
    </section>
  )
}

export default Navbar
