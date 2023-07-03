import React  , {useContext} from 'react'
import "./Modal.css"
import SignIn from './SignIn'
import ReactDOM from 'react-dom'
import { LoginContext } from './../store/ShowLoginProvider';



const Backdrop = () => {
    const loginCtx = useContext(LoginContext);
    return (
        <div  className="backdrop" onClick={loginCtx.closeLogin}></div>
        )
    }
    
    const Overlay = () => {
        const loginCtx = useContext(LoginContext);
        return(
            <div className="overlay">
            <SignIn />
            <div className="close" onClick={loginCtx.closeLogin}>x</div>
        </div>
    )
}

const Modal = () => {
        

      return (
    <React.Fragment>
        {
            ReactDOM.createPortal(<React.Fragment>
                <Backdrop   />
                <Overlay  />
            </React.Fragment> , 
            document.getElementById("modal") 
            )
        }
        
    </React.Fragment>
  )
}

export default Modal