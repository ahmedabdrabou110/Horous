import React , {useState} from 'react';



export const LoginContext =  React.createContext({
    showLogin:()=>{} ,
    closeLogin:()=>{},
    login:false
});

const LoginContextProvider = ({children}) => {
    const [login  , setLogin] = useState(false) ;

    const showLogin = ()=>{
        setLogin(true);
    }

    const closeLogin = ()=>{
        setLogin(false);
    }


    const loginValue ={
        closeLogin ,
        showLogin ,
        login
    }

    return (
        <LoginContext.Provider value={loginValue}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider ;