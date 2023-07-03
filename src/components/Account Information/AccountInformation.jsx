import React from 'react'

import Navbar from '../UI/Navbar'
import FormAccountInfo from './FormAccountInfo'
import "./AccountInformation.css"
import FormSubmit from './FormSubmit'
import Footer from '../MainUI/Footer'
const AccountInformation = () => {
  return (
    <div className='account_info'>
      <div className="navbar">
        <Navbar />
      </div>
      <p className='account_info_content'>Account info</p>
      <div className="line"></div>
      <div className="form_container">
        <FormAccountInfo />
      </div>
      <div className="horizontal_line"></div>
      <div className="form_submit">
        <FormSubmit />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default AccountInformation
