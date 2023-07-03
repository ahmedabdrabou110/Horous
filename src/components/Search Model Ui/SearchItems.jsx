import React from 'react'
import "./SearchItems.css"
const SearchItems = () => {
  return (
    <div className="search_items">
        <div className="line"></div>
          <div className="items">
            <img src="/assets/Search.svg" alt="Search" />
            <input type="text" placeholder='Where To?' />
          </div>
        </div>
  )
}

export default SearchItems