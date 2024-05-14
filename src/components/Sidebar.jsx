import NavBar from "react-bootstrap/Navbar"

import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"



const Sidebar = () => {
  return (
    <NavBar sticky='top' className='flex row sidebar'>
      <Nav.Item>
        <Nav.Link as={ Link } to='/'>Home</Nav.Link>
      </Nav.Item>
      <br/>
      <Nav.Item>
        <Nav.Link as={Link} to='/feed'>Top Clips</Nav.Link>
      </Nav.Item>
      <br/>
      <Nav.Item>
        <Nav.Link as={Link} to='/users'>Users</Nav.Link>
      </Nav.Item>
    </NavBar>
  )
}

export default Sidebar