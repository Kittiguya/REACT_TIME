import NavBar from "react-bootstrap/Navbar"

import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"



const Sidebar = () => {
  return (
    <NavBar sticky='top' className='flex column sidebar'>
      <Nav.Item>
        <Nav.Link hredf='/'>Home</Nav.Link>
      </Nav.Item>
      {<Link to="/feed"><button>A different way to get to feed</button></Link>  /*(no reload just re-render) */}
      <Nav.Item>
        <Nav.Link href='/feed'>Feed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/users'>Users</Nav.Link>
      </Nav.Item>
    </NavBar>
  )
}

export default Sidebar