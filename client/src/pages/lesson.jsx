import "./style/home.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import schedule from "../schedule";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DayProgress from "../components/day-progress";
import { useQuery } from "@apollo/client";
import { QUERY_VIDEOS } from "../utils/queries";
import Auth from "../utils/auth";
export default function Lesson() {
  const today = schedule.filter((item) => item.day == useParams().day);
  const dayInfo = today[0];
  const { loading, data } = useQuery(QUERY_VIDEOS);
  const videos = data?.videos || [];
  const todaysVideos = videos.filter(
    (video) => video.day == `Day ${dayInfo.day}`
  );
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  if (Auth.loggedIn() || userLoggedIn == true) {
    return (
      <Container>
        <Row>
          <DayProgress dayInfo={dayInfo} />
        </Row>
        <Row>
          {todaysVideos.map((thisVideo) => (
            <Col key={thisVideo.id} xs={12} md={6} lg={4} className="my-4">
              <div>
                <Card className="d-flex flex-column align-items-center p-3 mb-4 justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title={thisVideo.title}
                      src={thisVideo.videoLink}
                      className="embed-responsive-item"
                      allow="autoplay"
                    ></iframe>
                  </div>
                  <Card.Header>
                    <h2>{thisVideo.title}</h2>
                  </Card.Header>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
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
