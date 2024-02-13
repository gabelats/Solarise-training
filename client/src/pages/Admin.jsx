import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import React from "react";

const username = "Placeholder";

export default function admin() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={3} className="d-flex flex-column">
            <h2>Welcome, {username}</h2>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search Employee"
                className="mr-sm-2"
              />
              <Button variant="outline-warning" className="mt-3 mb-3">
                Search
              </Button>
            </Form>

            <Button variant="success" className="mb-3">
              Add Admin
            </Button>
            <Button variant="success" className="mb-3">
              Add Employee
            </Button>
            <Button variant="danger" className="mb-3">
              Remove Employee
            </Button>
            <Button variant="info" className="mb-3">
              View All Employees
            </Button>
          </Col>
          <Col xs={9}>{/* Main section to display employee details */}</Col>
        </Row>
      </Container>
    </div>
  );
}
