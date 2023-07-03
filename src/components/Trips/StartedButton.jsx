import React , {useContext} from 'react'
import { CreateTripContext } from '../store/ShowCreateTrip';

const StartedButton = () => {
    const tripCtx = useContext(CreateTripContext);
    
  return (
    <button onClick={tripCtx.showTrip} className='get_started'>Get Started</button>
  )
}

export default StartedButton