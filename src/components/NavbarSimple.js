import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarSimple.css';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


function NavbarSimple() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="container">
      <Navbar.Brand as={NavLink} to="/">
      <FontAwesomeIcon icon={faHome} /> {/* This line adds the home icon */}
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
            <Nav.Link as={NavLink} to="/about-me">About Me</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSimple;