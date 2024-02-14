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
import { REMOVE_EMPLOYEE } from "../utils/mutations";

const RemoveEmployee = ({ employees, setEmployees }) => {
  const [employeeFormState, setemployeeFormState] = useState({
    name: "",
    username: "",
  });
  const [deleteEmployee, { data, error }] = useMutation(REMOVE_EMPLOYEE);

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
    console.log("test");
    console.log(employeeFormState);
    try {
      const { data } = await deleteEmployee({
        variables: { ...employeeFormState },
      });
      // const removeEmployee = data.deleteEmployee;
      // // const updatedArray = employees.filter((keep) => {
      // //   keep.username !== removeEmployee.username;
      // // });
      // setEmployees([removeEmployee, ...employees]);
      setModalFormState(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="danger" className="mb-3" onClick={handleShow}>
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
                placeholder="Employees Username"
                name="username"
                type="text"
                value={employeeFormState.username}
                onChange={handleChange}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              style={{ cursor: "pointer" }}
              type="submit"
              onClick={handleFormSubmit}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};
export default RemoveEmployee;
