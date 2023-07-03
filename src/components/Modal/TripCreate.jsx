import React  , {useContext} from 'react'
import "./Modal.css"
import ReactDOM from 'react-dom'


import { CreateTripContext } from '../store/ShowCreateTrip';
import CreateTrip from './CreateTrip';



const Backdrop = () => {
    const tripCtx = useContext(CreateTripContext)
    return (
        <div  className="backdrop" onClick={tripCtx.closeTrip} ></div>
        )
    }
    const Overlay = () => {
        return(
            <CreateTrip />
    )
}

const TripInfo = () => {
        

      return (
    <React.Fragment>
        {
            ReactDOM.createPortal(<React.Fragment>
                <Backdrop   />
                <Overlay  />
            </React.Fragment> , 
            document.getElementById("trip") 
            )
        }
        
    </React.Fragment>
  )
}

export default TripInfo