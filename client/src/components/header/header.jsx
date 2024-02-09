import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
function Header() {
  return (
    <div>
      <header>
        <Navbar sticky="top" className="bg-light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="./src/assets/Asset_1.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Solarize
            </Navbar.Brand>
            <Nav variant="pills" defaultActiveKey="home" className="mx-4">
              <Nav.Link href="#home" className="nav-link-custom m-2">
                Home
              </Nav.Link>
              <Nav.Link href="#scripts" className="nav-link-custom m-2">
                Scripts
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom m-2">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#adminlogin">Admin Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Employee Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
