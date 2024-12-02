import React from 'react';
import './project-card.css';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <div className='image-container'>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="project-image"
                    />
                </a>
            </div>
            <a href={props.link} target="_blank" rel="noopener noreferrer" class="title-link">
                <h3 className="project-name" style={{ marginBottom: '0px' }}>{props.name}</h3>
            </a>
            <p className="project-skills" style={{ marginTop: '5px' }}>{props.skills}</p>
        </div>
    );
}

export default ProjectCard;
