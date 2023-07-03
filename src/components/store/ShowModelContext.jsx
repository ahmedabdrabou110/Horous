import React , {useState} from 'react';



export const ModelContext =  React.createContext({
    showModel:()=>{} ,
    closeModel:()=>{},
    model:false
});

const ModalContextProvider = ({children}) => {
    const [model  , setModal] = useState(false) ;

    const showModel = ()=>{
        setModal(true);
    }

    const closeModel = ()=>{
        setModal(false);
    }


    const modalValue ={
        closeModel ,
        showModel ,
        model
    }

    return (
        <ModelContext.Provider value={modalValue}>
            {children}
        </ModelContext.Provider>
    )
}

export default ModalContextProvider ;