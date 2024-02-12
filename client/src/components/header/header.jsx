import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const currentPage = useLocation().pathname;
  return (
    <div>
      <header>
        <Navbar sticky="top" className="bg-light">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/assets/Full_logo.png"
                width="50"
                height="50"
                className="d-inline-block align-center img2"
              />{" "}
            </Navbar.Brand>
            <Nav variant="pills" defaultActiveKey="home" className="mx-4">
              <Link to="/" className="nav-link-custom m-2">
                Home
              </Link>
              <Link to="/Modules/k" className="nav-link-custom m-2">
                Scripts
              </Link>
              <Link to="/contact" className="nav-link-custom m-2">
                Contact
              </Link>
            </Nav>
            <Nav>
              <Link to="/adminlogin" className="nav-link-custom mx-2">
                Admin Login
              </Link>
              <Link eventKey={2} to="/Login" className="nav-link-custom">
                Employee Login
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
