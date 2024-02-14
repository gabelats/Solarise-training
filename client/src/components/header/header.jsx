import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
function Header({ userLoggedIn, setUserLoggedIn }) {
  const adminLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const userLogout = (event) => {
    event.preventDefault();
    setUserLoggedIn(false);
  };

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
              {Auth.loggedIn() == true ? (
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
            <Nav>
              {Auth.loggedIn() == true ? (
                <button onClick={adminLogout} className="btn btn-custom">
                  Admin Logout
                </button>
              ) : (
                <Link to="/adminlogin" className="nav-link-custom">
                  Admin Login
                </Link>
              )}
              <button onClick={userLogout} className="btn btn-custom mx-5">
                Logout
              </button>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
