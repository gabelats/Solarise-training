import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Auth from "../../utils/auth";

function Header({ userLoggedIn, setUserLoggedIn }) {
  const adminLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

<<<<<<< HEAD
=======
  const userLogout = (event) => {
    event.preventDefault();
    setUserLoggedIn(false);
  };

  return (
    <div>
      <header>
        <Navbar sticky="top" className="bg-light" collapseOnSelect expand="lg">
          <Container className="justify-content-between">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/assets/Full_logo.png"
                width="50"
                height="50"
                className="d-inline-block align-center img2"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                variant="pills"
                defaultActiveKey="home"
                className={
                  Navbar.Collapse ? "flex-column flex-lg-row " : "flex-row"
                }
              >
                <Link to="/" className="nav-link-custom m-2">
                  Home
                </Link>
                <Link to="/Module/k" className="nav-link-custom m-2">
                  Scripts
                </Link>
                <a
                  href="https://d2du.lightspeedvt.com/"
                  target="_blank"
                  className="nav-link-custom m-2"
                >
                  Door 2 Door University
                </a>
              </Nav>
              <Nav className="m-2">
                {Auth.loggedIn() ? (
                  <button onClick={logout} className="btn btn-custom">
                    Admin Logout
                  </button>
                ) : (
                  <Link
                    eventkey={2}
                    to="/Login"
                    className="m-2 nav-link-custom"
                  >
                    Admin Login
                  </Link>
                )}
                {userLoggedIn == true ? (
                  <button onClick={logout} className="btn btn-custom">
                    Logout
                  </button>
                ) : (
                  <Link
                    eventkey={2}
                    to="/Login"
                    className="nav-link-custom m-2 "
                  >
                    Employee Login
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
