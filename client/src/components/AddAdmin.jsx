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

const AdminSignup = () => {
  const [adminFormState, setAdminFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [modalFormState, setModalFormState] = useState(false);
  const handleShow = () => setModalFormState(true);
  const handleClose = () => setModalFormState(false);
  const [addAdmin, { error, data }] = useMutation(ADD_ADMIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAdminFormState({
      ...adminFormState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAdmin({
        variables: { ...adminFormState },
      });
      setModalFormState(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="success" className="mb-3" onClick={handleShow}>
        Add Admin
      </Button>
      <Modal show={modalFormState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Admin</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input mx-2 my-2"
              placeholder="Employees Name"
              name="name"
              type="text"
              value={adminFormState.name}
              onChange={handleChange}
            />
            <input
              className="form-input mx-2 my-2"
              placeholder="Your email"
              name="email"
              type="email"
              value={adminFormState.email}
              onChange={handleChange}
            />
            <input
              className="form-input mx-2 my-2"
              placeholder="Employees Username"
              name="username"
              type="text"
              value={adminFormState.username}
              onChange={handleChange}
            />
            <input
              className="form-input mx-2 my-2"
              placeholder="******"
              name="password"
              type="text"
              value={adminFormState.password}
              onChange={handleChange}
            />
            <Button
              variant="primary"
              style={{ cursor: "pointer", display: "block" }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminSignup;
