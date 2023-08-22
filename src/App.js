import React from "react";
import Clock from "./components/clock/clock";
import HomeTitle from "./components/home-title";
import NavBar from "./components/home-navbar";

/* this is effectively the homepage */
function App() {
  return (
    <div>
      <NavBar/>
      <div style={{ display: "flex" }}>
        <HomeTitle/>
        <Clock/>
      </div>

    </div>
  );
}

export default App;
