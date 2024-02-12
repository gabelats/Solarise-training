import "./style/home.css";
import React from "react";
import { useParams } from "react-router-dom";
import schedule from "../schedule";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DayProgress from "../components/day-progress";
import { useQuery } from "@apollo/client";
import { QUERY_VIDEOS } from "../utils/queries";
//
//
export default function lesson() {
  const today = schedule.filter((item) => item.day == useParams().day);
  const dayInfo = today[0];
  const { loading, data } = useQuery(QUERY_VIDEOS);
  const videos = data?.videos || [];
  console.log(videos);
  const todaysVideos = videos.filter(
    (video) => video.day == `Day ${dayInfo.day}`
  );

  console.log(todaysVideos);
  return (
    <Container>
      <Row>
        <Col>
          <DayProgress dayInfo={dayInfo} />
        </Col>
        <Col className="col-8 my-4">
          {todaysVideos.map((thisVideo) => (
            <div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  src={thisVideo.videoLink}
                  width="100%"
                  height="480"
                  allow="autoplay"
                ></iframe>
              </div>
              <Card>
                <Card.Header>
                  <h2>{thisVideo.title}</h2>
                </Card.Header>
              </Card>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
