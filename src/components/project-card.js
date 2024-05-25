import React from 'react';
import './project-card.css'; // Adjust the path as necessary

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <h2 className="project-name">{props.name}</h2>
            {/* <div className='image-container'>
                <img
                    src={props.image}
                    alt={props.name}
                    className="project-image"
                />
            </div> */}
            <p className="project-skills">{props.skills}</p>
            <p className="project-description">{props.description}</p>
        </div>
    );
}

export default ProjectCard;
