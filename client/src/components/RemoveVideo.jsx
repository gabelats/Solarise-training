import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_VIDEO } from "../utils/mutations";
import { QUERY_VIDEOS } from "../utils/queries";
const RemoveVideo = () => {
  const [videoSelectId, setVideoSelectId] = useState("");

  const { loading, data } = useQuery(QUERY_VIDEOS);
  const videos = data?.videos || [];

  const [removeVideo, { error, removeData }] = useMutation(REMOVE_VIDEO);
  const [modalFormState, setModalFormState] = useState(false);
  const handleMainShow = () => setModalFormState(true);
  const handleMainClose = () => setModalFormState(false);

  const [responseModal, setResponseModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const handleResponseClose = () => setResponseModal(false);
  const success = "sucessfully removed your video";
  const failure =
    "something went wrong... please try again later! If error persists, please contact the development team.";

  const handleOptionSelect = (event) => {
    const { value } = event.target;
    setVideoSelectId({ value }.value);
    console.log(videoSelectId);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await removeVideo({
        variables: { videoId: videoSelectId },
      });
      setModalFormState(false);
      setResponseMessage(success);
    } catch (e) {
      console.error(e);
      setModalFormState(false);
      setResponseMessage(failure);
    }

    setResponseModal(true);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="danger" className="mb-3" onClick={handleMainShow}>
        Remove Video
      </Button>
      <Modal show={modalFormState} onHide={handleMainClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove a video</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Select
            aria-label="Default select example"
            onChange={handleOptionSelect}
          >
            <option>Select a video</option>
            {videos.map((video) => (
              <option value={video._id}>{video.title}</option>
            ))}
          </Form.Select>
          <Button
            variant="danger"
            style={{ cursor: "pointer" }}
            type="submit"
            onClick={handleFormSubmit}
          >
            Remove
          </Button>
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
export default RemoveVideo;
