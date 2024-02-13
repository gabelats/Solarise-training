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
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_EMPLOYEE } from "../utils/mutations";

const RemoveEmployee = () => {
  const [employeeFormState, setemployeeFormState] = useState({
    name: "",
    username: "",
  });
  const [deleteEmployee, { error, data }] = useMutation(REMOVE_EMPLOYEE);

  const [modalFormState, setModalFormState] = useState(false);

  const handleShow = () => setModalFormState(true);
  const handleClose = () => setModalFormState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setemployeeFormState({
      ...employeeFormState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await deleteEmployee({
        variables: { ...employeeFormState },
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
      <Button variant="success" className="mb-3" onClick={handleShow}>
        Remove Employee
      </Button>
      <Modal show={modalFormState} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Remove Employee</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Employees Name"
                name="name"
                type="text"
                value={employeeFormState.name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Employees Username"
                name="username"
                type="text"
                value={employeeFormState.username}
                onChange={handleChange}
              />
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
export default RemoveEmployee;
