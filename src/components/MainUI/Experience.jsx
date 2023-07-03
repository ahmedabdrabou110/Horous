import React from 'react'
import "./Experience.css"
import ExperienceItem from './ExperienceItem'
import { experiences } from '../UI/Utilits/constants'
const Experience = () => {
  return (
    <div className='experience__container'>
        <div className="experience_content">
            <h1>Top experiences on Horus</h1>
            <p>The best tours, activities and tickets</p>
        </div>
        <div className="experiences">
            {
                experiences.map(item => (
                    <ExperienceItem key ={item.src} src={item.src} title={item.title} likely={item.likely} price={item.price} tour={item.tour} titleBtn ={item.titleBtn} />
                ))
            }
        </div>
    </div>
  )
}

export default Experience