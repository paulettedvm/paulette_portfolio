import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch"; 

const Clock = () => {
    return(
        <div>
            <ReactP5Wrapper sketch={sketch}/>
        </div>
    );
}

export default Clock; 