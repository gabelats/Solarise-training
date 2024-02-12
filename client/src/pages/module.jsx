import Container from "react-bootstrap/Container";
import "./style/home.css";
import React from "react";
import DynamicCard from "../components/dynamic_card";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import schedule from "../schedule";

export default function module() {
  const today = schedule.filter((item) => item.day == useParams().day);
  const dayInfo = today[0];
  return (
    <Container>
      <div className=" pt-3 pb-3 mt-3 mb-3 border rounded ">
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
