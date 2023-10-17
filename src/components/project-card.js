const ProjectCard = (props) => {
    return(
        <div>
            <a href={props.link}>{props.name}</a>
            <p>{props.description}</p>
        </div>
    ); 
}

export default ProjectCard; 