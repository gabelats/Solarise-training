import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_EMPLOYEE } from "../utils/mutations";

const EmployeeSignup = ({ employees, setEmployees }) => {
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [addEmployee, { error, data }] = useMutation(ADD_EMPLOYEE);

  const [modalFormState, setModalFormState] = useState(false);
  const handleMainShow = () => setModalFormState(true);
  const handleMainClose = () => setModalFormState(false);

  const [responseModal, setResponseModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const handleResponseClose = () => setResponseModal(false);
  const success = "Employee successfully added!";
  const failure =
    "something went wrong... please try again later! If error persists, please contact the development team.";

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
      const newEmployee = data.addEmployee;
      setEmployees([...employees, newEmployee]);
      setModalFormState(false);
      setResponseMessage(success);
    } catch (e) {
      console.error(e);
      setResponseMessage(failure);
    }
    setFormState({
      name: "",
      username: "",
      password: "",
    });
    setResponseModal(true);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="success" className="mb-3" onClick={handleMainShow}>
        Add Employee
      </Button>
      <Modal show={modalFormState} onHide={handleMainClose}>
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
            <Button variant="secondary">Close</Button>
            <Button
              variant="primary"
              style={{ cursor: "pointer" }}
              type="submit"
              onClick={handleMainClose}
            >
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={responseModal} onHide={handleResponseClose}>
        <Modal.Body>
          <h4>{responseMessage}</h4>
          <Button variant="secondary" onClick={handleResponseClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default EmployeeSignup;
