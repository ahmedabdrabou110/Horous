import React,{useContext} from 'react'
import "./Luxor.css"
import { Link } from 'react-router-dom'
import { SearchContext } from '../store/ShowSearchContext';
const Luxor = () => {
    const searchCtx = useContext(SearchContext);
  return (
    <Link className='luxor_content' to="/home/explore/luxor" onClick={searchCtx.closeSearch}>
        <div className="image">
            <img src="/assets/Location.svg" alt="location" />
        </div>
        <p>Luxor</p>
    </Link>
  )
}

export default Luxor