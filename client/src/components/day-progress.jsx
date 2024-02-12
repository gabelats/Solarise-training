import "../pages/style/home.css";
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function DayProgress({ dayInfo }) {
  const moduleLink = `/Module/${dayInfo.day}`;
  return (
    <Card
      className="background-gradient"
      style={{ width: "18rem", marginTop: "2rem" }}
    >
      <Card.Body>
        <Card.Title>{dayInfo.title}</Card.Title>
        <ul>
          {dayInfo.rows.map((row) => (
            <li>{row.lesson}</li>
          ))}
        </ul>
        <Link to={moduleLink}>
          <Button variant="primary">Back to Module</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
