import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-links'>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about-me">about me</Link></li>
        <li><Link to="/projects">projects</Link></li>
        {/* <li><a href="https://www.linkedin.com/in/paulettedvm/">linkedin</a></li> */}
        <li><a href="mailto:pd2662@columbia.edu">e-mail me!</a></li>

      </ul>
    </nav>
  );
}

export default NavBar; 