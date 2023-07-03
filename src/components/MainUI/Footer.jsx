/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer__container'>
        <div className="about">
            <div className="title">
                About HoRus
            </div>
            <a href="#">
                About Us
            </a>
            <a href="#">
                Help Center
            </a>
            <a href="#">
                Career
            </a>
            <a href="#">
                Contact Us
            </a>
        </div>
        <div className="explore">
            <div className="title">
                Explore
            </div>
            <a href="#">
                Write a review
            </a>
            <a href="#">
                Add a place 
            </a>
            <a href="#">
                Join
            </a>
            <a href="#">
                Blog
            </a>
        </div>
        <div className="getting__app">
            <div className="title">
                Get The App
            </div>
            <a href="#">
                Iphone App
            </a>
            <a href="#">
                Android App
            </a>
        </div>

        <div className="join">
            <div className="title">
                Join Us On
            </div>
            <div className="social">
                <a href="#" className="facebook">
                    <img src="/assets/Facebook.svg" alt="" />
                </a>
                <a href="#" className="instagram">
                    <img src="/assets/Instagram.svg" alt="" />
                </a>
                <a href="#" className="linkedin">
                    <img src="/assets/LinkedIn.svg" alt="" />
                </a>
                <a href="#" className="twitter">
                    <img src="/assets/Twitter.svg" alt="" />
                </a>
            </div>
            <div className="new">
                <h1>
                    New to HoRus?
                </h1>
                    <form>
                        <input type="text" placeholder='E-mail Address' />
                        <button>Subscribe</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Footer