import React from 'react'
import { BottomLinks } from '../../UI/Utilits/constants'
import Place from '../Near By/Place';

const ExploreContent = () => {
  return (
    <>
            <h1>Explore Luxor</h1>
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