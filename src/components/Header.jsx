import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar data-bs-theme='dark' className='header'>
      <Container >
          <Navbar.Brand >Robins Gaming Hub</Navbar.Brand>
      </Container>
    </Navbar>

  )
}

export default Header;