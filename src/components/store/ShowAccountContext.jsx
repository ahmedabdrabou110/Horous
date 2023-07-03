import React , {useState} from 'react';





export const AccountContext = React.createContext({
    show:false ,
    showAccount:()=>{} ,
    closeAccount:()=>{}
}) ;


const AccountContextProvider = ({children})=>{
    const [show,setShow] = useState(false);

    const showAccount = ()=>{
        setShow(true);
    };

    const closeAccount = ()=>{
        setShow(false);
    }

    const showAccountValue ={
            show ,
            showAccount ,
            closeAccount ,
        }

    return (
        <AccountContext.Provider value={showAccountValue}>
            {children}
        </AccountContext.Provider>
    )
}


export default AccountContextProvider


