import React , {useState} from 'react';


export const CreateTripContext = React.createContext({
    show:false ,
    showTrip:()=>{} ,
    closeTrip:()=>{}
}) ;


const CreateTripProvider = ({children})=>{
    const [show,setShow] = useState(false);

    const showTrip = ()=>{
        setShow(true);
    };

    const closeTrip = ()=>{
        setShow(false);
    }

    const showTripValue ={
            show ,
            showTrip ,
            closeTrip ,
        }

    return (
        <CreateTripContext.Provider value={showTripValue}>
            {children}
        </CreateTripContext.Provider>
    )
}


export default CreateTripProvider


