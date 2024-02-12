import Container from "react-bootstrap/Container";
import "./style/home.css";
import React from "react";
import DynamicCard from "../components/dynamic_card";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

export default function module() {
  return (
    <Container>
      <div className=" pt-3 pb-3 mt-3 mb-3 border rounded ">
        <h2 className="mb-3">Day 1 Schedule</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Time</th>
              <th>Lesson</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 - 9:30 </td>
              <td>Onboarding, New hire docs, Sunbase, email, groupme set up</td>
            </tr>
            <tr>
              <td>9:30 - 12:00 </td>
              <td>Sunbase training video, Watch Solar 101</td>
            </tr>
            <tr>
              <td>12:00 - 12:30</td>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>12:30 - 2:00</td>
              <td>D2D Intro video, D2D foundations Video, Chris Solar 101</td>
            </tr>
            <tr>
              <td>2:00 - 3:00</td>
              <td>Q&A</td>
            </tr>
            <tr>
              <td>3:00 - </td>
              <td>Sunbase Canvassing and sales videos</td>
            </tr>
            <tr>
              <td>Homework</td>
              <td>Solar Insure Video, Memorize pitch</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <DynamicCard
          className="mb-2"
          imageUrl="../src/assets/Full_logo.png"
          title="Video 1"
          description="Description for Video 1"
        />
        <DynamicCard
          className="mb-2"
          imageUrl="../src/assets/Full_logo.png"
          title="Video 2"
          description="Description for Video 2"
        />
        <DynamicCard
          className="mb-2"
          imageUrl="../src/assets/Full_logo.png"
          title="Video 3"
          description="Description for Day 3"
        />
      </div>
      <div className="d-flex flex-row justify-content-around">
        <DynamicCard
          className="mb-2"
          imageUrl="../src/assets/Full_logo.png"
          title="Video 4"
          description="Description for Day 4"
        />
        <DynamicCard
          className="mb-2"
          imageUrl="../src/assets/Full_logo.png"
          title="Video 5"
          description="Description for Day 5"
        />
      </div>
    </Container>
  );
}
