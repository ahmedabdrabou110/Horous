import React,{useContext} from 'react'
import "./Near.css"
import { Link } from 'react-router-dom'
import { SearchContext } from '../store/ShowSearchContext';
const Near = () => {
    const searchCtx = useContext(SearchContext);
  return (
            <>
            <Link to="/home/explore/nearby"  className="near_by" onClick={searchCtx.closeSearch}>
              <div className="image">
                <img src="/assets/Best.svg" alt="Nearby" />
              </div>
              <p>Nearby</p>
            </Link>
          </>
  )
}

export default Near