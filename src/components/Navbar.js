import { Navbar, Nav, Container } from 'react-bootstrap';
import RickAndMorty from '../assets/RickAndMorty.svg.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
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
              Home
            </Link>
<<<<<<< HEAD
=======
            <Link
              to="/residents"
              className="mx-2"
              style={{ textDecoration: 'none', color: '#333' }}
            >
              Link
            </Link>
>>>>>>> d8eb43c160e398b8a4c5a27c900d64cc42309e80
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
