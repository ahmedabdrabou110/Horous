import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Giza.css"
import { SearchContext } from '../store/ShowSearchContext';
const Giza = () => {
    const searchCtx = useContext(SearchContext);
  return (
    <Link className='giza_content' to="/home/explore/giza" onClick={searchCtx.closeSearch} >
        <div className="image">
            <img src="/assets/Location.svg" alt="location" />
        </div>
        <p>Giza</p>
    </Link>
  )
}

export default Giza