import React from 'react'
import "./AccountInfo.css"
import EditProfile from './EditProfile'
import NavbarAccount from './NavbarAccount'
const AccountInfo = () => {
  return (
    <div className='account_container'>
        <div className="image_info">
            <div className="image"></div>
        </div>
        <>
            <EditProfile />
        </>
        <>
          <NavbarAccount />
        </>
    </div>
  )
}

export default AccountInfo