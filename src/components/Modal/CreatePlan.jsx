import React , {useContext} from 'react'
import "./CreatePlan.css";
import { CreateTripContext } from '../store/ShowCreateTrip';
import { CreatePlanContext } from '../store/ShowPlanContext';
const CreatePlan = () => {
    const tripCtx = useContext(CreateTripContext);
    const planCtx = useContext(CreatePlanContext);

    const planCreated = ()=>{
        tripCtx.showTrip();
        planCtx.closePlan()

    }
  return (
    <div className='create_plan__container'>
        <div className="create_plan_content">
            <h1>Create a Plan</h1>
            <input type="text" placeholder='creat a new plan' />
        </div>
        <div className="create_plan_btn">
            <button onClick={planCreated}>create</button>
        </div>
    </div>
  )
}

export default CreatePlan