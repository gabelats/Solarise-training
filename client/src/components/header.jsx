import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <header>
        <Navbar className="bg-body-warning">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="./src/assets/Small_logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Solarize
            </Navbar.Brand>
            <Nav className="mr-2">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Scripts</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
