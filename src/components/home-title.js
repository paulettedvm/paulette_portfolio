import { Link } from 'react-router-dom';

const HomeTitle = () => {
    return (
        <div>
            <h1 style={{ marginBlockStart: 0 }}>hey! i'm paulette.</h1>
            <p> i like putting random, cool things on the internet ;) </p>
            <p><Link to="/projects">what are these circles?</Link></p>
        </div>
    );
}

export default HomeTitle; 