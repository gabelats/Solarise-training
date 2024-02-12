import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import "./style/login.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Adminlogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [login, { error }] = useMutation(LOGIN);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { email: username, password },
      });
      console.log("Login success:", data);
      setLoggedIn(true);
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  if (loggedIn) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center mb-5">
            <br />
            <Container>
              <br />
              <Row>
                <Col>
                  <img
                    alt=""
                    src="./src/assets/Small_logo.png"
                    width="200"
                    height="189"
                    className="d-inline-block align-top"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <h3 className="mb-4 text-center">
                Admin Login : Employee Training
              </h3>
              <form
                onSubmit={handleSubmit}
                className="signup-form"
                id="signup-form"
              >
                <div className="form-group">
                  <input
                    id="username-signup"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                  <br />
                </div>
                <div className="form-group field-container">
                  <input
                    id="password-signup"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <button
                    id="submitButton"
                    type="submit"
                    className="form-control btn btn-primary submit px-3 mb-2"
                  >
                    Sign In
                  </button>
                </div>
                <div className="text-center">
                  <Link to="/adminlogin">Admin Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
