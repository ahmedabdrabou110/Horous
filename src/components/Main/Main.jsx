import React , {useState , useEffect} from 'react'
import { Splash } from '../Splash/Splash'
import Index from './index';

const Main = ( ) => {
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },3000)
    },[])
    return (
        <div>
            {loading ? <Splash /> : <Index  />}
        </div>
    )
}

export default Main
