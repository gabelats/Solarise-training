import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_ADMIN } from "../utils/mutations";

const username = "Placeholder";

const adminSignup = () => {
  const [adminFormState, setAdminFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [addAdmin, { error, data }] = useMutation(ADD_ADMIN);
  const handleChange = (event) => {
    const { admin, value } = event.target;

    setAdminFormState({
      ...adminFormState,
      [admin]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAdmin({
        variables: { ...adminFormState },
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Create New Admin</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Employees Name"
              name="name"
              type="text"
              value={adminFormState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={adminFormState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Employees Username"
              name="username"
              type="text"
              value={adminFormState.username}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={adminFormState.password}
              onChange={handleChange}
            />
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" style={{ cursor: "pointer" }} type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

module.exports = adminSignup;
