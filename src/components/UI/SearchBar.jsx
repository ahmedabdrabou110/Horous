import "./Search.css"
import React,{useContext} from 'react';
import { SearchContext } from '../store/ShowSearchContext';
const SearchBar = () => {
  const searchCtx = useContext(SearchContext);
  return (
    <div className='searchbar'>
      <input type="text" placeholder='Where To ?' onFocus={searchCtx.showSearch} />
      <img src="/assets/search.svg" alt="search" />
    </div>
  )
}

export default SearchBar
