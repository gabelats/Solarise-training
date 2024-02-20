import { Button, Modal, Container } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { REMOVE_EMPLOYEE } from "../utils/mutations";
import { QUERY_EMPLOYEES } from "../utils/queries";

const RemoveEmployee = ({ employees, setEmployees }) => {
  const [employeeFormState, setemployeeFormState] = useState({
    username: "",
  });
  const [deleteEmployee, { data, error }] = useMutation(REMOVE_EMPLOYEE);

  const [modalFormState, setModalFormState] = useState(false);
  const handleMainShow = () => setModalFormState(true);
  const handleMainClose = () => setModalFormState(false);

  const [responseModal, setResponseModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const handleResponseClose = () => setResponseModal(false);
  const success = "sucessfully removed employee";
  const failure =
    "something went wrong... please try again later! If error persists, please contact the development team.";
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

      setEmployees(
        employees.filter(
          (employee) => employee.username !== employeeFormState.username
        )
      );

      setModalFormState(false);
      setResponseMessage(success);
    } catch (error) {
      console.error(error);
      setResponseMessage(failure);
    }

    setemployeeFormState({
      username: "",
    });
    setResponseModal(true);
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="danger" className="mb-3" onClick={handleMainShow}>
        Remove Employee
      </Button>
      <Modal show={modalFormState} onHide={handleMainClose}>
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
            <Button
              variant="danger"
              style={{ cursor: "pointer" }}
              type="submit"
              className="mx-2"
            >
              Delete
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
export default RemoveEmployee;
