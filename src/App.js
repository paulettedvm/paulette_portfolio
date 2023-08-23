import React from "react";
import Clock from "./components/clock/clock";
import HomeTitle from "./components/home-title";
import NavBar from "./components/home-navbar";

/* this is effectively the homepage */
function App() {
  return (
    <div class="app-container">
      <NavBar/>
      <div class="clock-title">
        <HomeTitle/>
        <Clock/>
      </div>

    </div>
  );
}

export default App;
