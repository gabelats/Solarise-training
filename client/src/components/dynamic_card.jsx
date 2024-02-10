import React from "react";
import Card from "react-bootstrap/Card"; // Import Card component from React Bootstrap
import Button from "react-bootstrap/Button"; // Import Button component from React Bootstrap

function DynamicCard({ imageUrl, title, description }) {
  return (
    <div className="mb-4 mt-4">
      <Card border="dark" style={{ width: "25rem" }}>
        <Card.Img className="p-2" variant="top" src={imageUrl} alt={title} />
        <Card.Body className="bg-light border">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button className="bolder" variant="warning">
            Begin Module
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DynamicCard;
