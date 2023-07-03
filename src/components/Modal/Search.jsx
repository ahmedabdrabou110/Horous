import React from 'react'
import "./Search.css"
import SearchItems from '../Search Model Ui/SearchItems'

import Near from '../Search Model Ui/Near'
import Best from '../Search Model Ui/Best'
import Giza from '../Search Model Ui/Giza'
import Luxor from '../Search Model Ui/Luxor'


const Search = () => {
  return (
    <div className='search__container'>
        <SearchItems />
        <div className="suggesttion_items">
          <div className="near_best">
            <Near  />
            <div className="line"></div>
            <Best />
          </div>
        <div className="popular_destination">
          <h2>POPULAR DESTINATION</h2>

          <div className="explore">
            <Giza/>
            <Luxor />
          </div>
        </div>
        </div>
        
      </div>
  )
}

export default Search