import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_EMPLOYEE } from "../utils/mutations";

const username = "Placeholder";

const EmployeeSignup = () => {
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [addEmployee, { error, data }] = useMutation(ADD_EMPLOYEE);
  const [modalFormState, setModalFormState] = useState(false);
  const handleShow = () => setModalFormState(true);
  const handleClose = () => setModalFormState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addEmployee({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
      console.error(error);
    }
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="success" className="mb-3" onClick={handleShow}>
        Add Employee
      </Button>
      <Modal show={modalFormState} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Create New Employee</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Employees Name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Employees Username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="text"
                value={formState.password}
                onChange={handleChange}
              />
              <Button
                variant="primary"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};
export default EmployeeSignup;
