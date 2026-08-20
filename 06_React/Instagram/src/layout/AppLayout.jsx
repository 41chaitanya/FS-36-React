import React, { useContext } from "react";
import SideNav from "../component/SideNav.jsx";
import Profile from "../component/ProfileCard.jsx";
import ProfileCard from "../component/ProfileCard.jsx";
import StoriesBar from "../component/StoriesBar.jsx";
import SuggestionComponent from "../component/SuggestionComponent.jsx";
import { StoriesProvider } from "../context/StoriesContaxt.jsx";
import { Outlet } from "react-router";
import { UserContext } from "../context/UserContext.jsx";
import Loign from "../pages/Loign.jsx";

const AppLayout = () => {

    const {isLogedIn}=useContext(UserContext)
    if(isLogedIn){
        return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="ml-64 flex-1 p-6">
        <Outlet/>
      </main>
    </div>
  );
    }
    else{
        return(
            <>
            
            <Loign/>
            </>
        )
    }
  
};

export default AppLayout;
