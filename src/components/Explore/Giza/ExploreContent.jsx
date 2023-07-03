import React from 'react'
import "./ExploreContent.css"
import { BottomLinks } from '../../UI/Utilits/constants'
import Place from '../Near By/Place'

const ExploreContent = () => {
  return (
        <>
            <h1>Explore Giza</h1>
        <div className="explore_links">
          {
            BottomLinks.map(link => (
              <Place key ={link.src} src={link.src} title={link.title} />
            ))
          }
        </div>
        </>
    )
}

export default ExploreContent