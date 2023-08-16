import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const NavbarComponent = ()=> {
  return(
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="/" className='fw-semibold flex items-center'>
          Thea Abril
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-2">
            <Nav.Link ><Link to="/" className='text-decoration-none text-dark'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/work" className='text-decoration-none text-dark'>Work</Link></Nav.Link>
            <Nav.Link><Link to="/education" className='text-decoration-none text-dark'>Education</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}
export default NavbarComponent;