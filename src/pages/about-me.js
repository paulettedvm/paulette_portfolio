import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h1> about me </h1>
            <div className='about-body'>
                <p>
                    i’m a recent graduate from columbia university with a b.a. in computer science and creative writing.
                    my coursework in nonfiction writing, data visualization, and computer graphics sparked my interest in exploring the intersection between media and technology.
                </p>

                <p> most recently, i worked as a{" "}
                    <a href="https://www.columbiaspectator.com/contributors/Paulette-Del-Valle/">graphics reporter</a>
                    {" "}at the {" "}<a href="https://www.columbiaspectator.com/">columbia daily spectator</a>,
                    where i led data-driven storytelling initiatives and collaborated with journalists to produce data visualizations and other graphics for publication.
                </p>


                <p> previously, i was a {" "}
                    <a href="https://careers.washingtonpost.com/internships/2023/"> news engineering intern</a>{" "}
                    at the washington post, where i developed and maintained cutting-edge tools for the interactive news engineering team.
                    this included contributions to the washington post design system and internal publishing tools that streamlined visual journalism processes within the newsroom.
                    alongside two fellow interns, i also designed and developed post-snap, a tool enabling readers to customize article formatting for printing.
                </p>

                <p> outside of work, i am a fiber arts enthusiast and manga nerd. if you share these interests—or just want to connect—feel free to reach out to me on <a href="https://www.linkedin.com/in/paulettedvm/">linkedin</a>!</p>
            </div>
        </div>
    );
};

export default AboutMe;