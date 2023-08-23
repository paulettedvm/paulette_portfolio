import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch"; 
import "./clock.css"; 

const Clock = () => {
    return(
        <div className="clock-wrapper">
            <ReactP5Wrapper sketch={sketch}/>
            <p className="tooltip">by the way, are you wondering "what the hell are these dots?" e-mail me and i'll tell you! ;)</p>
        </div>
    );
}

export default Clock;
