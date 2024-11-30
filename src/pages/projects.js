import React from "react";
import ProjectCard from "../components/project-card";

const Projects = () => {
    return (
        <div>
            <div class="projects-container">
                <ProjectCard name="medical center to launch ‘diversity in clinical trials’ training program as racial disparities in clinical care persist"
                    image="/images/trials.gif"
                    skills="R | Adobe Illustrator"
                />

                <ProjectCard name="columbia announces record-high term bill, financial aid enhancements"
                    image="/images/tuition.gif"
                    skills="R | Adobe Illustrator"
                    description="for this project, i created two graphics to visually support the article 'Columbia Announces Record-High Term Bill, Financial Aid Enhancements' by noah bernstein and gelila negesse, published on april 20, 2023. these visuals were designed to enhance understanding of the financial trends impacting Columbia University and to compare its costs with other ivy league institutions. to achieve this, i used R and Python for data cleaning, data scraping, and conducting preliminary analysis. the final graphics were then crafted in Adobe Illustrator to ensure clarity and visual appeal."
                />

                <ProjectCard name="columbia in the canopy: green space and the city’s urban forest"
                    image="/images/treemap.gif"
                    skills="Python | ArcGIS | Adobe Illustrator | Data Collection"
                />
            </div>

            {/* <h1> projects </h1> */}
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
                    skills="HTML/CSS | React.js | p5.js"
                />
                <ProjectCard name="sudoku solver"
                    image="/images/sudoku.gif"
                    skills="Python"
                />
            </div>

            {/* <h2 style={{ marginBottom: '0px' }}> data + graphics work </h2>
            <p style={{ marginTop: '1px' }}>for more, feel free to check out my <a href="https://www.columbiaspectator.com/contributors/Paulette-Del-Valle/">columbia spectator profile</a>!</p> */}
        </div>
    );
}

export default Projects; 