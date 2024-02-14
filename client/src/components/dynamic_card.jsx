import React from "react";
import Card from "react-bootstrap/Card"; // Import Card component from React Bootstrap
import Button from "react-bootstrap/Button"; // Import Button component from React Bootstrap
import { Link } from "react-router-dom";
import { useState } from "react";

function DynamicCard({ imageUrl, title, description }) {
  function getDay(input) {
    const inputArray = input.trim().split("");
    return `/Module/${inputArray[inputArray.length - 1]}`;
  }
  return (
    <div className="mb-4 mt-4">
      <Card border="dark" style={{ width: "100%" }}>
        <Card.Img className="p-2" variant="top" src={imageUrl} alt={title} />
        <Card.Body className="bg-light border">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={getDay(title)}>
            <Button className="bolder" variant="warning">
              Begin Module
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DynamicCard;
