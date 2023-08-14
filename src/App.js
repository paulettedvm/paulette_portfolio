import React from "react";
import Clock from "./components/clock/clock";
import HomeTitle from "./components/home-title";
import NavBar from "./components/home-navbar";

/* this is effectively the homepage */
function App() {
  return (
    <div style={{
      display: "flex"
    }}>
      <HomeTitle/>
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <NavBar/>
        <Clock/>
      </div>
    </div>
  );
}

export default App;
