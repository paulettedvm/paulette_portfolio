import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: "none", 
  color: "inherit",
}

const itemStyle = {
  margin: '0 2rem 2rem 0', /* doing this so the nav-bar elements are left-aligned */
  padding: 0, 
}

const NavBar = () => {
  return(
    <nav>
      <ul style={{
        listStyle: "none", 
        display: "flex",
        padding: 0, 
      }}>
        <li style={itemStyle}><Link to="/" style={linkStyle}>home</Link></li>
        <li style={itemStyle}><Link to="/about-me" style={linkStyle}>about me</Link></li>
        {/* <li style={itemStyle}><a href="https://www.linkedin.com/in/paulettedvm/" style={linkStyle}>linkedin</a></li> */}
        <li style={itemStyle}><a href="mailto:pd2662@columbia.edu" style={linkStyle}>e-mail me!</a></li>
        
      </ul>
    </nav>
  ); 
}

export default NavBar; 