import React from "react";
import ProjectCard from "../components/project-card";

const Projects = () => {
    return (
        <div>

            <h1 style={{ marginBottom: '0px' }}> data + graphics work </h1>
            <p style={{ marginTop: '1px' }}>for more, feel free to check out my <a href="https://www.columbiaspectator.com/contributors/Paulette-Del-Valle/" target="_blank" rel="noopener noreferrer">columbia spectator profile</a>!</p>

            <div class="projects-container">
                <ProjectCard name="medical center to launch ‘diversity in clinical trials’ training program as racial disparities in clinical care persist"
                    image="/images/trials.gif"
                    skills="r | adobe illustrator"
                    link="https://www.columbiaspectator.com/city-news/2023/02/06/medical-center-to-launch-diversity-in-clinical-trials-training-program-as-racial-disparities-in-clinical-care-persist/"
                />

                <ProjectCard name="columbia announces record-high term bill, financial aid enhancements"
                    image="/images/tuition.gif"
                    skills="r | adobe illustrator"
                    link="https://www.columbiaspectator.com/news/2023/04/20/columbia-announces-record-high-term-bill-financial-aid-enhancements/"
                />

                <ProjectCard name="columbia in the canopy: green space and the city’s urban forest"
                    image="/images/treemap.gif"
                    skills="python | arcGIS | adobe illustrator | data collection"
                    link="https://www.columbiaspectator.com/the-eye/2023/10/08/columbia-in-the-canopy-green-space-and-the-citys-urban-forest/"
                />

                <ProjectCard name="exceeding previous estimates, columbia is the largest private landowner in new york city, city data reveals"
                    image="/images/landowner.png"
                    skills="python | data analysis"
                    link="https://www.columbiaspectator.com/city-news/2023/04/20/exceeding-previous-estimates-columbia-is-the-largest-private-landowner-in-new-york-city-city-data-reveals/"
                />
            </div>

            <h1> additional projects </h1>

            <div class="projects-container">

                {/* 
            <ProjectCard name="abstract clock"
                image="/images/projects-porfolio.png"
                skills="HTML/CSS | p5.js"
                description="if you were wondering 'what's with those graphics on the home page?' this is it! as part of my spring 2021 data visualization course, i developed an abstract clock using p5.js where i was able to have hands-on design experience and experiment with unconventional ways to represent data."
            />
             */}

                <ProjectCard name="this website!"
                    image="/images/website.gif"
                    skills="html/css | react.js | p5.js"
                />
                <ProjectCard name="sudoku solver"
                    image="/images/sudoku.gif"
                    skills="python"
                />
            </div>

        </div>
    );
}

export default Projects; 