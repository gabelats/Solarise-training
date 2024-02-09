import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src='./assets/Full_logo.png'
              alt="Logo"
              width="30"
              height="30"
              className="mr-2"
            />
          </Navbar.Brand>
          <Nav variant="pills bg-warning" defaultActiveKey="/home" className="me-auto">
            <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#script" className="text-dark">Script</Nav.Link>
            <Nav.Link href="final-assessment" className="text-dark">Final Assessment</Nav.Link>
            <Nav.Link href="#contact" className="text-dark">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;