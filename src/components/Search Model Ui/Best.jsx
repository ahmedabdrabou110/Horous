import React , {useContext} from 'react'
import { Link } from 'react-router-dom';
import "./Best.css"
import { SearchContext } from '../store/ShowSearchContext';
const Best = () => {
    const searchCtx = useContext(SearchContext);
  return (
    <Link className='best_place' to="/home/explore/best_places" onClick={searchCtx.closeSearch}>
        <div className="image">
            <img src="/assets/Best.svg" alt="best places" />
        </div>
        <p>6 Best Places to Visit</p>
    </Link>
)
}

export default Best