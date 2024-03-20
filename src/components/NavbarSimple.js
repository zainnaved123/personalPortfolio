import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarSimple.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function NavbarSimple() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    return (e) => {
      e.preventDefault(); // Prevent default anchor link behavior
      navigate(path); // Navigate to the specified path

      // Scroll to the top of the page after navigation
      window.scrollTo(0, 0);
    };
  };

  const handleAboutMeClick = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    navigate("/"); // Navigate back to the home page, if not already there
  
    setTimeout(() => {
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
        const yOffset = -60; // Adjust this value based on your navbar's height
        const y = aboutMeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }, 0); // Adjust timeout if needed, though 0 should generally work
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="container">
        <Navbar.Brand as={NavLink} to="/" onClick={handleNavigate("/")}>
          <FontAwesomeIcon icon={faHome} /> {/* This line adds the home icon */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/projects" onClick={handleNavigate("/projects")}>Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/resume" onClick={handleNavigate("/resume")}>Resume</Nav.Link>
            <Nav.Link href="/" onClick={handleAboutMeClick}>About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSimple;
