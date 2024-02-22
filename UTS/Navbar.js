import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">FIELD DAYS FLOWERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Kingdom">Kingdom</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="me-auto">
              <Nav.Link href="Login">Login</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;