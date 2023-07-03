import React from "react";

export const SearchContext = React.createContext({
    closeSearch:()=>{} , 
    showSearch:()=>{} , 
    toggle:false
}) ;


 const ShowSearchContext = ({children})=>{
    const [toggle, setToggle] = React.useState(false) ;


    const showSearch = () => {
        setToggle(true);
    }
    const closeSearch = () => {
        setToggle(false);
    }

    return (
        <SearchContext.Provider value={{closeSearch , showSearch , toggle}}>
            {children}
        </SearchContext.Provider>
    )
}

export default ShowSearchContext;
