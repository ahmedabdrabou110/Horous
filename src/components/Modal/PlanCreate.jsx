import React  , {useContext} from 'react'
import "./Modal.css"
import ReactDOM from 'react-dom'

import CreatePlan from './CreatePlan';
import { CreatePlanContext } from '../store/ShowPlanContext';



const Backdrop = () => {
    const planCtx = useContext(CreatePlanContext);
    return (
        <div  className="backdrop" onClick={planCtx.closePlan} ></div>
        )
    }
    const Overlay = () => {
        return(
            <CreatePlan />
    )
}

const PlanInfo = () => {
        

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

export default PlanInfo