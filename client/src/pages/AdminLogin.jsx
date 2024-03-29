//IMPORTS
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import "./style/login.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

//
//export function
const Adminlogin = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  //Handle Admin login change and submit
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
      console.log("Login success:", data);
      navigate("/Admin");
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  //
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
                    src="/assets/Small_Logo.png"
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
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                  <br />
                </div>
                <div className="form-group field-container">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleChange}
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
                  <Link to="/login">Employee Login</Link>
                </div>
              </form>
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
