<<<<<<< HEAD
import "./style/login.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function login() {
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
              <h3 className="mb-4 text-center">Training:</h3>
              <form action="#" className="signup-form" id="signup-form">
                <div className="form-group">
                  <input
                    id="username-signup"
                    type="text"
                    className="form-control"
                    placeholder="Username"
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
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <button
                    id="submitButton"
                    type="submit"
                    className="form-control btn btn-primary submit px-3"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
=======
export default function Login() {
  return;
>>>>>>> main
}
