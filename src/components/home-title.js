import { Link } from 'react-router-dom';

const HomeTitle = () => {
    return (
        <div className='home-contents'>
            <h1 style={{ marginBlockStart: 0 }}>hey! i'm paulette.</h1>
            <p> a writer and software engineer exploring the intersection of media and technology.</p>
            <p className="learn-more"> learn more <Link to="/about-me"> about me</Link> and <Link to="/projects"> my work </Link></p>
        </div>
    );
}

export default HomeTitle; 