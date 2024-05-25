import React from "react";
import ProjectCard from "../components/project-card";

const Projects = () => {
    return (
        <div>
            <h1> projects </h1>

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
                description="instead of using a template to build my website, i decided to learn how to do it myself and use it as an opportunity to showcase website development skills. this site is built with React and p5.js, it is fully responsive so it should display nicely on all screen sizes and types. but if something is broken, feel free to let me know!"
            />

            <h2 style={{ marginBottom: '0px' }}> data + graphics work </h2>
            <p style={{ marginTop: '1px' }}>for more, feel free to check out my <a href="https://www.columbiaspectator.com/contributors/Paulette-Del-Valle/">columbia spectator profile</a>!</p>

            <ProjectCard name="medical center to launch ‘diversity in clinical trials’ training program as racial disparities in clinical care persist"
                image="/images/trials.gif"
                skills="R | Adobe Illustrator"
                description="for this project i created two graphics to visually support the article 'Medical Center to Launch ‘Diversity in Clinical Trials’ Training Program as Racial Disparities in Clinical Care Persist' by rainier harris, published on february 5, 2023. 
                to achieve this, i used R and Python for data cleaning and scraping to conduct preliminary analysis. the final graphics were then crafted in Adobe Illustrator to ensure clarity and visual appeal. these visuals aim to enhance understanding of the systemic issues affecting clinical trial participation. the final graphics provide insights into the underrepresentation of hispanic residents in clinical trials, the distribution of clinical trials by research area, and the prevalence of chronic diseases in Community Board 9 compared to the number of related clinical trials at Columbia University Irving Medical Center."
            />

            <ProjectCard name="columbia announces record-high term bill, financial aid enhancements"
                image="/images/tuition.gif"
                skills="R | Adobe Illustrator"
                description="for this project, i created two graphics to visually support the article 'Columbia Announces Record-High Term Bill, Financial Aid Enhancements' by noah bernstein and gelila negesse, published on april 20, 2023. these visuals were designed to enhance understanding of the financial trends impacting Columbia University and to compare its costs with other ivy league institutions. to achieve this, i used R and Python for data cleaning, data scraping, and conducting preliminary analysis. the final graphics were then crafted in Adobe Illustrator to ensure clarity and visual appeal."
            />

            <ProjectCard name="columbia in the canopy: green space and the city’s urban forest"
                image="/images/treemap.gif"
                skills="Python | ArcGIS | Adobe Illustrator | Data Collection"
                description="for the 'Columbia in the Canopy: Green Space and the City’s Urban Forest' project, i led the data collection and tree census initiatives to map and analyze the trees around Columbia University’s Morningside Heights campus. collaborating with a team of Columbia Spectator staff, we used Google Maps to collect latitude and longitude data for each tree on campus. i then utilized Python to extract, clean, and process the data from Google Maps into a clean, comprehensive dataset.
                the final map was created using a combination of ArcGIS and Adobe Illustrator. a custom base, created by the Columbia Spectator’s illustration team, required alignment with traditional map locations, which was achieved using ArcGIS. Adobe Illustrator was then used to ensure clarity and visual appeal. the map visually represents the distribution and density of trees on Columbia University’s Morningside Heights campus, highlighting the green coverage of the area.
                this project aimed to provide insights into urban forestry management and promote awareness of green space within the city. it showcases my skills in Python, ArcGIS, and Adobe Illustrator, and my dedication to combining data collection with impactful visual storytelling."
            />
        </div>
    );
}

export default Projects; 