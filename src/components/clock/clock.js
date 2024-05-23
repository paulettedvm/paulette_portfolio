import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch";
import MobileSketch from "./mobile-sketch";
import "./clock.css";

const Clock = () => {
    return (
        <div className="clock-wrapper">
            <div className="desktop-sketch">
                <ReactP5Wrapper sketch={sketch} />
            </div>
            <div className="mobile-sketch">
                <ReactP5Wrapper sketch={MobileSketch} />
            </div>
        </div>
    );
}

export default Clock;
