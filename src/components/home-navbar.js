import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className='nav-bar'>
      <ul className='nav-links'>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>home</Link></li>
        <li><Link to="/about-me" className={location.pathname === '/about-me' ? 'active' : ''}>about me</Link></li>
        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>projects</Link></li>
        {/* <li><a href="https://www.linkedin.com/in/paulettedvm/">linkedin</a></li> */}
        <li><a href="mailto:pd2662@columbia.edu">e-mail me!</a></li>

      </ul>
    </nav>
  );
}

export default NavBar; 