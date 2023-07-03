import React, { useContext } from 'react'
import "./SignIn.css";
import {  GoogleAuthProvider , signInWithPopup } from "firebase/auth"
import { regestrationInfo } from '../UI/Utilits/constants';
import { auth } from './../../config/firebase';
import "./RegestrationButton.css"
import { LoginContext } from '../store/ShowLoginProvider';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const loginCtx = useContext(LoginContext);  
    const navigate = useNavigate()
    const handleSignGoogle = ()=>{
        loginCtx.closeLogin();
        const provider =  new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    
    const handleLoginEmail = ()=>{
        loginCtx.closeLogin();
        navigate("/signin");
    }
   
  return (
    <>
        <div className="logo_container">
            <img src="/assets/Logo.svg" alt="Logo" />
            <h3>Sign in to HoRus.</h3>
        </div>
        <div className="regestration">
            {/* {
                regestrationInfo.map(item => (
                    <RegestraionButton key={item.src} src={item.src} title={item.title}  />
                ))
                
            } */}

            <button className='regestration_button' onClick={handleSignGoogle}>
                <img src={regestrationInfo[0].src} alt={regestrationInfo[0].title} />
                <h3>Continue with {regestrationInfo[0].title}</h3>
            </button>
            
            <button className='regestration_button' onClick={handleLoginEmail}>
                <img src={regestrationInfo[2].src} alt={regestrationInfo[2].title} />
                <h3>Continue with {regestrationInfo[2].title}</h3>
            </button>
        </div>
    </>
  )
}

export default SignIn