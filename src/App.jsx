import React, { useContext }  from 'react'
import Main from './components/Main/Main'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ModelContext } from './components/store/ShowModelContext';
import Account from './components/Accounts/Account';
import Profile from './components/Modal/Profile';
import { AccountContext } from './components/store/ShowAccountContext';
import FilloutProfile from './components/Accounts/FilloutProfile';
import AccountTrips from './components/Accounts/AccountTrips';
import AccountPhoto from './components/Accounts/AccountPhoto';
import AccountReview from './components/Accounts/AccountReview';
import AccountInformation from './components/Account Information/AccountInformation';
import { SearchContext } from './components/store/ShowSearchContext';
import ExploreNearBy from './components/Explore/Near By/ExploreNearBy';
import ExploreBestPlaces from './components/Explore/Best Places/ExploreBestPlaces';
import ExploreGiza from './components/Explore/Giza/ExploreGiza';
import ExploreLuxor from './components/Explore/Luxor/ExploreLuxor';
import ProfileInfo from './components/Modal/ProfileInfo';
import SearchInfo from './components/Modal/SearchInfo';
import Trips from './components/Trips/Trips';
import PrivateTrip from './components/Trips/PrivateTrip';
import AllTrip from './components/Trips/AllTrip';
import PublicTrip from './components/Trips/PublicTrip';
import SavedTrip from './components/Trips/SavedTrip';
import { CreateTripContext } from './components/store/ShowCreateTrip';
import TripInfo from './components/Modal/TripCreate';
import { CreatePlanContext } from './components/store/ShowPlanContext';
import PlanInfo from './components/Modal/PlanCreate';
import Alters from './components/Alters/Alters';
import Filters from './components/Reviews/Filters';
import AddReviews from './components/Reviews/AddReviews';
import WriteReviews from './components/Reviews/WriteReviews';
import AskQuestion from './components/Reviews/AskQuestion';
import SeeAllReviews from './components/Reviews/SeeAllReviews';
import Museum from './components/Categories/Museum';
import Pyramids from './components/Categories/Pyramids';
import Hotels from './components/Categories/Hotels';
import Resturant from './components/Categories/Resturant';

import Hospital from './components/Categories/Hospital';
import Antiques from './components/Categories/Antiques';
import Modal from './components/Modal/Modal';
import { AuthContext } from './components/store/AuthContextProvider';
import { LoginContext } from './components/store/ShowLoginProvider';
import Signup from './components/Sign In/Signup';
import Signin from './components/Sign In/Signin';
// import Bank from './components/Categories/Bank';
const App = () => {
   

  const modelCtx = useContext(ModelContext);
  const profileCtx = useContext(AccountContext);
  const seachCtx = useContext(SearchContext);
  const tripCtx = useContext(CreateTripContext);
  const planCtx = useContext(CreatePlanContext);
  const {user} = useContext(AuthContext);
  const loginCtx= useContext(LoginContext);
  return (
    <>
    <Routes>
      <Route path="" element={<Navigate to="home" replace={true} />} />
      <Route path="home"   element={<Main />}>
        
      </Route>
      <Route  path='account'>
        <Route path='view-profile' element={<Account />}>
          <Route path ="activityfeed" element={<FilloutProfile />} />
          <Route path ="trips" element={<AccountTrips  />} />
          <Route path ="photos" element={<AccountPhoto  />} />
          <Route path ="review" element={<AccountReview  />} />
        </Route>
        <Route path='accountinfo' element={<AccountInformation />} />
      </Route>
      <Route path="trips" element={<Trips />} >
        <Route path="alltrips" element={<AllTrip />}  />
        <Route path="privatetrip" element={<PrivateTrip />} />
         <Route path="publictrip" element={<PublicTrip />} />
        <Route path="saved" element ={<SavedTrip />}  /> 
      </Route>
      <Route path='alters' element={<Alters />} >
        <Route path="newest" />
        <Route path="unread" />
        <Route path="archive" />
      </Route>
      <Route path="home/explore" >
          <Route path='nearby' element={<ExploreNearBy  />}  />
          <Route path="best_places" element = {<ExploreBestPlaces />} />
          <Route path ="giza" element = {<ExploreGiza />}/>
          <Route path ="luxor" element = {<ExploreLuxor />}/>
        </Route>

        <Route path="reviews" element={<Filters />}/>
        <Route path="reviews/add-reviews" element={<AddReviews />} />
        <Route path="reviews/write-reviews" element={<WriteReviews />} />
        <Route path="reviews/ask-a-question" element={<AskQuestion />} />
        <Route path="reviews/see-all-reviews" element={<SeeAllReviews />} />
        <Route path="home/museum" element={<Museum />} />
        <Route path="home/pyramids" element={<Pyramids />} />
        <Route path="home/hotels" element={<Hotels />} />
        <Route path="home/resturant" element={<Resturant />} />
        {/* <Route path="home/bank" element={<Bank />} /> */}
        <Route path="home/hospital" element={<Hospital />} />
        <Route path="home/antiques" element={<Antiques />} />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/signin" element={<Signin />} />
      
    </Routes>

      {
        user && loginCtx.login && <Modal /> 
        
      }

      {
        !user && modelCtx.model && (<ProfileInfo />)
      }

    {
      profileCtx.show && (<Profile />)
    }


    {
      loginCtx.login && <Modal />
    }

    {
      seachCtx.toggle && (<SearchInfo />)
    }


  {
    tripCtx.show && (<TripInfo />)
  }

  {
    planCtx.show && <PlanInfo />
  }

  

    </>
  )
}

export default App
