import React, { useContext } from "react";
import SideNav from "../component/SideNav.jsx";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../context/UserContext.jsx";

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
        return <Navigate to="/login" />
    }
  
};

export default AppLayout;
