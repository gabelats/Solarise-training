import Container from "react-bootstrap/Container";
import "./style/home.css";
import React from "react";
import Table from "react-bootstrap/Table";
import { Link, useParams } from "react-router-dom";
import schedule from "../schedule";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Auth from "../utils/auth";
import { useOutletContext } from "react-router-dom";
//
//
//

export default function module() {
  const today = schedule.filter((item) => item.day == useParams().day);
  const dayInfo = today[0];
  const [userLoggedIn, setUserLoggedIn] = useOutletContext();
  const lessonLink = `/lesson/${dayInfo.day}`;
  if (Auth.loggedIn() || userLoggedIn == true) {
    return (
      <Container>
        <div className=" pt-3 pb-3 mt-3 mb-3 border rounded btn-custom">
          <h2 className="mb-3">{dayInfo.title}</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Time</th>
                <th>Lesson</th>
              </tr>
            </thead>
            <tbody>
              {dayInfo.rows.map((row) => (
                <tr>
                  <td>{row.timeslot}</td>
                  <td>{row.lesson}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {dayInfo.day == "k" ? (
          <Card>
            <Card.Header className="btn-custom">
              Homework resources:{" "}
            </Card.Header>
            <Card.Body className="background-gradient">
              <a
                href="https://docs.google.com/document/d/1hfOw4KdMSnbh9dFUqBcnjbETADOD8vKY/edit#heading=h.gjdgxs"
                target="_blank"
              >
                <Button variant="primary" className="d-inline mx-3 btn-custom">
                  pitching script
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1-MzbvEMaRiWq83EWOP0gZbegnNAYSrke/view"
                target="_blank"
              >
                <Button variant="primary" className="d-inline mx-3 btn-custom">
                  5 day training schedule
                </Button>
              </a>
            </Card.Body>
          </Card>
        ) : (
          <Card>
            <Card.Header className="btn-custom">Today's lessons</Card.Header>
            <Card.Body className="background-gradient">
              <img
                alt=""
                src="/assets/Asset_1.png"
                width="50"
                height="48"
                className="d-inline align-top"
              />
              <Card.Text className="d-inline align-center m-4">
                Every day you will have a mix of videos to watch as well as
                in-person training.
              </Card.Text>
              <Link to={lessonLink}>
                <Button variant="primary" className="d-block my-3">
                  Take me to today's videos and lessons
                </Button>
              </Link>
            </Card.Body>
          </Card>
        )}
      </Container>
    );
  } else {
    return (
      <div>
        <h2> Please Login </h2>
        <Link to="/">
          <button className="btn btn-custom">To login page</button>
        </Link>
      </div>
    );
  }
}
