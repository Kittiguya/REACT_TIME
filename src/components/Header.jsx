import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/NavLink";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar data-bs-theme='dark' className='header'>
      <Container >
          <Navbar.Brand >Robins Gaming Hub</Navbar.Brand>
          <NavLink as={Link} to={'/register'}>Register</NavLink>
          <NavLink as={Link} to={'/login'}>Login</NavLink>
      </Container>
    </Navbar>

  )
}

export default Header;