import React from 'react';
import './project-card.css';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <div className='image-container'>
                <img
                    src={props.image}
                    alt={props.name}
                    className="project-image"
                />
            </div>
            <h2 className="project-name">{props.name}</h2>
            <p className="project-skills">{props.skills}</p>
        </div>
    );
}

export default ProjectCard;
