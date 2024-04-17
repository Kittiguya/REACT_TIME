import NavBar from "react-bootstrap/Navbar"

import Nav from "react-bootstrap/Nav"



const Sidebar = () => {
  return (
    <NavBar sticky='top' className='flex column sidebar'>
        <Nav.Item>
            <Nav.Link>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>Feed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>My Page</Nav.Link>
        </Nav.Item>
    </NavBar>
  )
}

export default Sidebar