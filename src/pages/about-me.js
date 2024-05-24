import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h1> about me </h1>
            <div className='about-body'>
                <p> i recently graduated from Columbia University in the City of New York with a B.A. in Computer Science and Creative Writing.
                    my coursework in nonfiction writing, data visualization, and computer graphics has been instrumental in shaping my interest in journalism, technology, and design.
                </p>

                <p> for the past two years, i worked as a{" "}
                    <a href="https://www.columbiaspectator.com/contributors/Paulette-Del-Valle/">graphics/data reporter</a>
                    {" "}at the {" "}<a href="https://www.columbiaspectator.com/">columbia daily spectator</a>,
                    where i led data-driven storytelling initiatives and collaborated closely with journalists to produce compelling graphics using tools like Python, R, D3.js, and Adobe Illustrator.
                    my approach values collaboration and embraces creative flexibility, constantly seeking new challenges.
                </p>

                <p>
                    additionally, i worked as a junior editor and social media specialist at the Columbia Journal of Science, Technology, Ethics, and Policy.
                    in this role, i managed fact-checking, edited staff contributions, and created content for the journal's social media platforms.
                    i also served as a website coordinator for the Columbia University Physics Department, where i transformed the department's digital presence by editing and maintaining the website, as well as crafting dynamic written and visual content to foster engagement across various platforms.
                </p>

                <p> outside Columbia University, i worked as a{" "}
                    <a href="https://careers.washingtonpost.com/internships/2023/"> news engineering intern</a>{" "}
                    for The Washington Post’s News Engineering team. as an intern, i developed and maintained cutting-edge tools for the Interactive News Engineering team, including the Washington Post Design System and internal publishing tools that streamlined visual journalistic processes and enhanced data-driven narratives.
                    additionally, as part of our final intern-led project i, along with two other interns, designed and developed a tool that allows readers to customize article formatting when printing.
                </p>

                <p> whenever i'm not working, i'm a devoted fiber arts enthusiast and film lover. you can easily find me crocheting, knitting, or sewing while watching a movie. i don’t have a huge online presence, but feel free to connect with me on <a href="https://www.linkedin.com/in/paulettedvm/">linkedin</a> or <a href="https://letterboxd.com/paulette_dvm/">letterboxd</a>! </p>
            </div>
        </div>
    );
};

export default AboutMe;