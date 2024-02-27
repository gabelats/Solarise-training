import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_EMPLOYEE } from "../utils/mutations";
import "./components.css";
const RemoveEmployee = ({ employees, setEmployees, employee }) => {
  const [deleteEmployee, { data, error }] = useMutation(REMOVE_EMPLOYEE);
  const [modalFormState, setModalFormState] = useState(false);
  const handleMainShow = () => setModalFormState(true);
  const handleMainClose = () => setModalFormState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await deleteEmployee({
        variables: { username: employee },
      });

      setEmployees(
        employees.filter((thisEmployee) => thisEmployee.username !== employee)
      );

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
      <img
        src="/assets/remove.svg"
        alt="remove employee"
        onClick={handleMainShow}
        class="remove-button"
      />
      <Modal show={modalFormState} onHide={handleMainClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <h3>Are you sure you want to remove {employee}?</h3>
            <Button
              variant="danger"
              style={{ cursor: "pointer" }}
              type="submit"
              className="mx-2"
            >
              Delete
            </Button>
            <Button
              variant="secondary"
              style={{ cursor: "pointer" }}
              onClick={handleMainClose}
              className="mx-2"
            >
              Cancel
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RemoveEmployee;
