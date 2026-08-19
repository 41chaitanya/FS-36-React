import React from "react";
import { StoriesProvider } from "../context/StoriesContaxt.jsx";
import StoriesBar from "../component/StoriesBar.jsx";
import ProfileCard from "../component/ProfileCard.jsx";
import SuggestionComponent from "../component/SuggestionComponent.jsx";
import Profile from "./Profile.jsx";

const Home = () => {
  return (
    <>
      <StoriesProvider>
        <StoriesBar />
      </StoriesProvider>
       <ProfileCard />
      <SuggestionComponent />

      <Profile/>
    </>
  );
};

export default Home;
