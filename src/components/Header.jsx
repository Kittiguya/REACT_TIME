import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/NavLink";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";




function Header({ users }) {
  return (
    <Navbar data-bs-theme='dark' className='header'>
      <Container >
        { users ? (
          <Navbar.Brand>
            {users.first_name && users.last_name
               `${users.username}'s Gaming Hub`}
            
          </Navbar.Brand>
        ) : (
          <Navbar.Brand >Gaming Hub</Navbar.Brand>
          )}
          <NavLink as={Link} to={'/'}>Home</NavLink>
          <NavLink as={Link} to={`/MyPage`}>My Page</NavLink> 
          <NavLink as={Link} to={'/register'}>Register</NavLink>
          <NavLink as={Link} to={'/login'}>Login</NavLink>
          <NavLink as={Link} to={'/login'}>Logout</NavLink>        
      </Container>
    </Navbar>

  )
}

export default Header;