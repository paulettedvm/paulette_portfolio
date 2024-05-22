import React from "react";
import Clock from "../components/clock/clock";
import HomeTitle from "../components/home-title";

const Home = () => {
  return (
    <div class="app-container">
      <div class="clock-title">
        <HomeTitle />
        <Clock />
      </div>
    </div>
  );
}

export default Home;