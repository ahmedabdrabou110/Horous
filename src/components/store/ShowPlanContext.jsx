import React , {useState} from 'react';

export const CreatePlanContext = React.createContext({
    show:false ,
    showPlan:()=>{} ,
    closePlan:()=>{}
}) ;


const CreatePlanProvider = ({children})=>{
    const [show,setShow] = useState(false);

    const showPlan = ()=>{
        setShow(true);
    };

    const closePlan = ()=>{
        setShow(false);
    }

    const showPlanValue ={
            show ,
            showPlan ,
            closePlan ,
        }

    return (
        <CreatePlanContext.Provider value={showPlanValue}>
            {children}
        </CreatePlanContext.Provider>
    )
}


export default CreatePlanProvider


