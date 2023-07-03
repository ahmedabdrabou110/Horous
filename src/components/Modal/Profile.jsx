import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'
import {useContext }from 'react';
import { AccountContext } from '../store/ShowAccountContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';


const Profile = () => {
    const profileCtx = useContext(AccountContext);
    const logout = (e)=>{
      e.preventDefault();
      profileCtx.closeAccount() ;
      signOut(auth);
      // console.log(user)
      
    }
  return (
    <div className="profile_overlay">
        <div className="info">
            <Link to="/account/view-profile/activityfeed" onClick={profileCtx.closeAccount} >View Profile</Link>
            <Link to="/account/accountinfo" className='account_info' onClick={profileCtx.closeAccount}>Account Info</Link>
            <Link to="#" onClick={logout}>Sign Out</Link>
        </div>
    </div>
  )
}

export default Profile