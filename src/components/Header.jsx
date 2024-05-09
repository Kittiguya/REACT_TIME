import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/NavLink";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";




function Header({ users }) {
  return (
    <Navbar data-bs-theme='dark' className='header'>
      <Container>
        <Navbar.Brand>
          {users ? `${users}'s Gaming Hub` : "Gaming Hub"}
        </Navbar.Brand>
        <NavLink as={Link} to="/">Home</NavLink>
        {users && (
          <>
            <NavLink as={Link} to="/MyPage">My Page</NavLink>
            <NavLink as={Link} to="/logout">Logout</NavLink>
          </>
        )}
        {!users && (
          <>
            <NavLink as={Link} to="/register">Register</NavLink>
            <NavLink as={Link} to="/login">Login</NavLink>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;