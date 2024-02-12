import "./style/home.css";
import React from "react";
import { useParams } from "react-router-dom";
import schedule from "../schedule";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DayProgress from "../components/day-progress";
import Ratio from "react-bootstrap/Ratio";
//
//
export default function lesson() {
  const today = schedule.filter((item) => item.day == useParams().day);
  const dayInfo = today[0];

  return (
    <Container>
      <Row>
        <Col>
          <DayProgress dayInfo={dayInfo} />
        </Col>
        <Col className="col-8 my-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://drive.google.com/file/d/1V2zZifNnQbn3Fd9Hwif1yhcRnci5LXTO/preview"
              width="100%"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
          <Card>
            <Card.Header>
              <h2>Title</h2>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
