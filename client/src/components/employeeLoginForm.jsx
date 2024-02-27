// EmployeeLoginForm.js
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EMPLOYEE_LOGIN } from "../utils/mutations";
import { useNavigate } from "react-router-dom";

const EmployeeLoginForm = ({ userLoggedIn, setUserLoggedIn }) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(EMPLOYEE_LOGIN);
  const navigate = useNavigate();

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
      console.log("Login success:", data);
      setUserLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-wrap p-0">
      <h3 className="mb-4 text-center">Employee Training</h3>
      <form onSubmit={handleSubmit} className="signup-form" id="signup-form">
        <div className="form-group">
          <input
            id="username"
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            value={formState.username}
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
      </form>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default EmployeeLoginForm;
