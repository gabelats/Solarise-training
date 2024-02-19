import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_VIDEO } from "../utils/mutations";
const EmployeeSignup = () => {
  const [formState, setFormState] = useState({
    title: "",
    videoLink: "",
    day: "",
  });

  const [addVideo, { error, data }] = useMutation(ADD_VIDEO);
  const [modalFormState, setModalFormState] = useState(false);
  const handleMainShow = () => setModalFormState(true);
  const handleMainClose = () => setModalFormState(false);

  const [responseModal, setResponseModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const handleResponseClose = () => setResponseModal(false);
  const success = "sucessfully added your video";
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
    console.log(formState);
    try {
      const { data } = await addVideo({
        variables: { ...formState },
      });
      setModalFormState(false);
      setResponseMessage(success);
    } catch (e) {
      console.error(e);
      setResponseMessage(failure);
    }
    setFormState({
      title: "",
      videoLink: "",
      day: "",
    });
    setResponseModal(true);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="success" className="mb-3" onClick={handleMainShow}>
        Add Video
      </Button>
      <Modal show={modalFormState} onHide={handleMainClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Video</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Video Title"
              name="title"
              type="text"
              value={formState.title}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Video URL"
              name="videoLink"
              type="text"
              value={formState.videoLink}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Day #, e.g '1'"
              name="day"
              type="text"
              value={formState.day}
              onChange={handleChange}
            />

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
