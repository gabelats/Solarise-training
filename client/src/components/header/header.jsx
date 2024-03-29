import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

function Header({ userLoggedIn, setUserLoggedIn, admin, setAdmin }) {
  const adminLogout = (event) => {
    event.preventDefault();
    setAdmin(false);
    Auth.logout();
  };

  const userLogout = (event) => {
    event.preventDefault();
    setUserLoggedIn(false);
  };

  return (
    <div>
      <header>
        <Navbar sticky="top" className="bg-light" collapseOnSelect expand="lg">
          <Container className="justify-content-between">
            <Link to="/">
              <img
                alt=""
                src="/assets/Full_logo.png"
                width="50"
                height="50"
                className="d-inline-block align-center img2"
              />{" "}
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                variant="pills"
                defaultActiveKey="home"
                className={
                  Navbar.Collapse ? "flex-column flex-lg-row " : "flex-row"
                }
              >
                {admin == true ? (
                  <Link to="/Admin" className="nav-link-custom m-2">
                    Admin Dashboard
                  </Link>
                ) : (
                  <div></div>
                )}
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
                {admin == true ? (
                  <button onClick={adminLogout} className="btn btn-custom">
                    <Link to="/" className="nav-link-custom m-2 ">
                      Logout
                    </Link>
                  </button>
                ) : (
                  <div></div>
                )}
                {userLoggedIn == true ? (
                  <button onClick={userLogout} className="btn btn-custom">
                    Logout
                  </button>
                ) : (
                  <div></div>
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
