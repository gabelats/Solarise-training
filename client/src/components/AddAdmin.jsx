import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_ADMIN } from "../utils/mutations";

const AdminSignup = () => {
  const [adminFormState, setAdminFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [modalFormState, setModalFormState] = useState(false);
  const handleMainShow = () => setModalFormState(true);
  const handleMainClose = () => setModalFormState(false);
  const [addAdmin, { error, data }] = useMutation(ADD_ADMIN);

  const [responseModal, setResponseModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const handleResponseClose = () => setResponseModal(false);
  const success = "Admin successfully added";
  const failure =
    "something went wrong... please try again later! If error persists, please contact the development team.";

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
      setResponseMessage(success);
    } catch (e) {
      console.error(e);
      setResponseMessage(failure);
    }
    setAdminFormState({
      name: "",
      email: "",
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
        Add Admin
      </Button>
      <Modal show={modalFormState} onHide={handleMainClose}>
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

export default AdminSignup;
