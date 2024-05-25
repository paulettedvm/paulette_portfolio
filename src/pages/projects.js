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
                image="/images/projects-porfolio.png"
                skills="HTML/CSS | React.js | p5.js"
                description="instead of using a template to build my website, i decided to learn how to do it myself and use it as an opportunity to showcase website development skills. this site is built with React and p5.js, it is fully responsive so it should display nicely on all screen sizes and types. but if something is broken, feel free to let me know!"
            />

            <h2> data + graphics work </h2>
            <p>for more, feel free to check out my <a href="https://www.columbiaspectator.com/contributors/Paulette-Del-Valle/">columbia spectator profile</a>!</p>

            <ProjectCard name="medical center to launch ‘diversity in clinical trials’ training program as racial disparities in clinical care persist"
                image="/images/medical-trials-porfolio.png"
                skills="R | Adobe Illustrator"
                description="for this project i created two graphics to visually support the article 'Medical Center to Launch ‘Diversity in Clinical Trials’ Training Program as Racial Disparities in Clinical Care Persist' by rainier harris, published on february 5, 2023. 
                to achieve this, i used R and Python for data cleaning and scraping to conduct preliminary analysis. the final graphics were then crafted in Adobe Illustrator to ensure clarity and visual appeal. these visuals aim to enhance understanding of the systemic issues affecting clinical trial participation. the final graphics provide insights into the underrepresentation of hispanic residents in clinical trials, the distribution of clinical trials by research area, and the prevalence of chronic diseases in Community Board 9 compared to the number of related clinical trials at Columbia University Irving Medical Center."
            />

            <ProjectCard name="columbia announces record-high term bill, financial aid enhancements"
                image="/images/tuition-graphic.png"
                skills="R | Adobe Illustrator"
                description="for this project, i created two graphics to visually support the article 'Columbia Announces Record-High Term Bill, Financial Aid Enhancements' by noah bernstein and gelila negesse, published on april 20, 2023. these visuals were designed to enhance understanding of the financial trends impacting Columbia University and to compare its costs with other ivy league institutions. to achieve this, i used R and Python for data cleaning, data scraping, and conducting preliminary analysis. the final graphics were then crafted in Adobe Illustrator to ensure clarity and visual appeal."
            />

            <ProjectCard name="columbia in the canopy: green space and the city’s urban forest"
                image="/images/tree-map-porfolio.png"
                skills="Python | ArcGIS | Adobe Illustrator | Data Collection"
                description="for the 'Columbia in the Canopy: Green Space and the City’s Urban Forest' project, i led the data collection and tree census initiatives to map and analyze the trees around Columbia University’s Morningside Heights campus. collaborating with a team of Columbia Spectator staff, we used Google Maps to collect latitude and longitude data for each tree on campus. i then utilized Python to extract, clean, and process the data from Google Maps into a clean, comprehensive dataset.
                the final map was created using a combination of ArcGIS and Adobe Illustrator. a custom base, created by the Columbia Spectator’s illustration team, required alignment with traditional map locations, which was achieved using ArcGIS. Adobe Illustrator was then used to ensure clarity and visual appeal. the map visually represents the distribution and density of trees on Columbia University’s Morningside Heights campus, highlighting the green coverage of the area.
                this project aimed to provide insights into urban forestry management and promote awareness of green space within the city. it showcases my skills in Python, ArcGIS, and Adobe Illustrator, and my dedication to combining data collection with impactful visual storytelling."
            />

            { /*
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
                link="https://github.com/paulettedvm/a0_dataviz" />
            <ProjectCard name="mistranslation method (inspired by david cameron's methods in 'flowers of bad')"
                description="using gpt2, this python script transforms snippets of text into a fully-formed ai-generated text. which i used as a method for a mis-translation of esmeralda santiago's text 'how to eat a guava'."
                link="" />
            <ProjectCard name="stock price predictor"
                description="developed and trained a sequential machine learning model that predicts bitcoin pricing."
                link="https://github.com/paulettedvm/stock-pred" />
            <ProjectCard name="this website!"
                description="i got to use my react and p5.js skills to bring this idea to life, so i hope you enjoy it!"
                link="" />
            */ }
        </div>
    );
}

export default Projects; 