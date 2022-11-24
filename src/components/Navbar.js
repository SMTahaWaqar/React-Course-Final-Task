import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../logo.svg"

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' sticky='top'>
      <Container>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link></Nav.Link>
            <Nav.Link><Link to="/status" style={{color: 'white', textDecoration: 'none'}}>Status</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;