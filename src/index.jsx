import  { createRoot } from "react-dom/client"
import App from "./App";
import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ModalContextProvider from "./components/store/ShowModelContext";
import AccountContextProvider from "./components/store/ShowAccountContext";
import ShowSearchContext from "./components/store/ShowSearchContext";
import CreateTripProvider from "./components/store/ShowCreateTrip";
import CreatePlanProvider from "./components/store/ShowPlanContext";
import AuthContextProvider from "./components/store/AuthContextProvider";
import LoginContextProvider from "./components/store/ShowLoginProvider";
const container = document.getElementById("root") ;

const root = createRoot(container) ;

root.render(
   <CreatePlanProvider>
      <CreateTripProvider>
     <ShowSearchContext>
<AccountContextProvider>
    <ModalContextProvider>
    
        <BrowserRouter>
         <AuthContextProvider>
            <LoginContextProvider>
               <App />
            </LoginContextProvider>
         </AuthContextProvider>
        </BrowserRouter>
    
</ModalContextProvider>
</AccountContextProvider>
</ShowSearchContext>

   </CreateTripProvider>
   </CreatePlanProvider>
);