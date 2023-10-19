import React from "react";
import ProjectCard from "../components/project-card"; 

const Projects = () => {
    return(
        <div>
            <h3>graphics work</h3>
            <ul>
                <li><a href="https://www.columbiaspectator.com/news/2023/04/20/columbia-announces-record-high-term-bill-financial-aid-enhancements/">columbia announces record-high term bill, financial aid enhancements</a></li>
                <li><a href="https://www.columbiaspectator.com/city-news/2023/02/06/medical-center-to-launch-diversity-in-clinical-trials-training-program-as-racial-disparities-in-clinical-care-persist/">medical center to launch ‘diversity in clinical trials’ training program as racial disparities in clinical care persist</a></li>
                <li><a href="https://www.columbiaspectator.com/city-news/2023/04/20/exceeding-previous-estimates-columbia-is-the-largest-private-landowner-in-new-york-city-city-data-reveals/">exceeding previous estimates, columbia is the largest private landowner in new york city, city data reveals</a></li>
                <li><a href="https://www.columbiaspectator.com/the-eye/2023/10/08/columbia-in-the-canopy-green-space-and-the-citys-urban-forest/">columbia in the canopy: green space and the city’s urban forest</a></li>
            </ul>
            <p>for more, feel free to check out my <a href="https://www.columbiaspectator.com/contributors/Paulette-Del-Valle/">columbia spectator profile</a>!</p>

            <h3>other projects!</h3>
            <ProjectCard name="an abstract clock" 
                description="you were probably wondering 'what's with those circles on the home page?' well, this is it! as part of my spring 2021 data visualization course, i developed an abstract clock using p5.js where i was able to have a hands-on design experience."
                link="https://github.com/paulettedvm/a0_dataviz"/>
            <ProjectCard name="mistranslation method (inspired by david cameron's methods in 'flowers of bad')" 
                description="using gpt2, this python script transforms snippets of text into a fully-formed ai-generated text. which i used as a method for a mis-translation of esmeralda santiago's text 'how to eat a guava'."
                link=""/>
            <ProjectCard name="stock price predictor" 
                description="developed and trained a sequential machine learning model that predicts bitcoin pricing."
                link="https://github.com/paulettedvm/stock-pred"/>
            <ProjectCard name="this website!" 
                description="i got to use my react and p5.js skills to bring this idea to life, so i hope you enjoy it!"
                link=""/>
        </div>
    );
}

export default Projects; 