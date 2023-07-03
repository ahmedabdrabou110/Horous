import React  , {useContext} from 'react'
import "./Modal.css"
import ReactDOM from 'react-dom'
import Profile from './Profile'
import { ModelContext } from '../store/ShowModelContext';



const Backdrop = () => {
    const profileCtx = useContext(ModelContext)
    return (
        <div  className="backdrop" onClick={profileCtx.closeModel} ></div>
        )
    }
    
    const Overlay = () => {
        return(
            <div className="overlay">
            <Profile />
        </div>
    )
}

const ProfileInfo = () => {
        

      return (
    <React.Fragment>
        {
            ReactDOM.createPortal(<React.Fragment>
                <Backdrop   />
                <Overlay  />
            </React.Fragment> , 
            document.getElementById("profile") 
            )
        }
        
    </React.Fragment>
  )
}

export default ProfileInfo