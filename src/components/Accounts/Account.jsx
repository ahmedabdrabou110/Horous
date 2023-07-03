import React from 'react'
import Navbar from '../UI/Navbar'
import "./Acount.css"
import AccountInfo from './AccountInfo'
import ShareTravel from './ShareTravel'
import AddInfo from './AddInfo'
import { addInfo } from '../UI/Utilits/constants'
import Footer from '../MainUI/Footer'
import { Outlet } from 'react-router-dom'
const Account = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="account__info">
        <AccountInfo />
      </div>
      <div className='share__travel'>
        <ShareTravel />
      </div>
      
      <Outlet />
      <div className="addInfo">
        {
          addInfo.map(item => (
            <AddInfo key={item.src} src={item.src} title={item.title} />
          ))
        }
      </div>
    <footer className='footer'>
      <Footer />
    </footer>
    </>
  )
}

export default Account