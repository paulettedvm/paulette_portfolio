import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch"; 
import "./clock.css"; 

const Clock = () => {
    return(
        <div className="clock-wrapper">
            <ReactP5Wrapper sketch={sketch}/>
        </div>
    );
}

export default Clock;
