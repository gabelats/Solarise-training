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

const EmployeeSignup = ({ employees, setEmployees }) => {
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
    const { employee, value } = event.target;

    setFormState({
      ...formState,
      [employee]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addEmployee({
        variables: { ...formState },
      });
<<<<<<< HEAD
      const newEmployee = data.addEmployee;
      setEmployees([...employees, newEmployee]);
      setModalFormState(false);
=======
>>>>>>> main
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
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
<<<<<<< HEAD
              <Button
                variant="primary"
                style={{ cursor: "pointer" }}
                type="submit"
                onClick={handleClose}
              >
                Submit
              </Button>
=======
>>>>>>> main
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button
              variant="primary"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};
export default EmployeeSignup;
