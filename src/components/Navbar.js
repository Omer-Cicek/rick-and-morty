import { Navbar, Nav, Container } from 'react-bootstrap';
import RickAndMorty from '../assets/RickAndMorty.svg.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/rick-and-morty/">
          <img
            src={RickAndMorty}
            alt="Rick and morty Logo"
            width="100"
            height="40"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link
              className="mx-2"
              to="/locations"
              style={{ textDecoration: 'none', color: '#333' }}
            >
              Locations
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
