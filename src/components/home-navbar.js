const linkStyle = {
  textDecoration: "none", 
  color: "inherit",
}

const itemStyle = {
  margin: '0 0 0 2rem', /* 0px left margins so that nav is aligned with canvas */
  padding: 0, 
}

const NavBar = () => {
  return(
    <nav>
      <ul style={{
        listStyle: "none", 
        display: "flex",
        flexDirection: "row-reverse",
        padding: 0, 
      }}>
        <li style={itemStyle}><a href="/" style={linkStyle}>contact</a></li>
        <li style={itemStyle}><a href="/" style={linkStyle}>projects</a></li>
        <li style={itemStyle}><a href="/" style={linkStyle}>about me</a></li>
      </ul>
    </nav>
  ); 
}

export default NavBar; 