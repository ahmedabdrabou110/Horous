import React  , {useContext} from 'react'
import "./Modal.css"
import ReactDOM from 'react-dom'
import Search from './Search';
import { SearchContext } from '../store/ShowSearchContext';



const Backdrop = () => {
    const searchCtx = useContext(SearchContext)
    return (
        <div  className="backdrop" onClick={searchCtx.closeSearch} ></div>
        )
    }
    
    const Overlay = () => {
        return(
            <>
            <Search />
        </>
    )
}

const SearchInfo = () => {
        

      return (
    <React.Fragment>
        {
            ReactDOM.createPortal(<React.Fragment>
                <Backdrop   />
                <Overlay  />
            </React.Fragment> , 
            document.getElementById("search") 
            )
        }
        
    </React.Fragment>
  )
}

export default SearchInfo