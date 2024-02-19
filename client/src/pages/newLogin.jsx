import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EmployeeLoginForm from "../components/employeeLoginForm";
import AdminLoginForm from "../components/adminLoginForm";

const Login = () => {
  const [activeTab, setActiveTab] = useState("employee");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="login-page align-items-center">
      <Container className="col-6 justify-content-center">
        <Row>
          <Col>
            <img
              alt=""
              src="../../public/assets/Full_logo.png"
              width="600"
              height="200"
              className="d-inline-block align-top"
            />
            <Nav fill variant="tabs" defaultActiveKey="/home" className="my-3">
              <Nav.Item>
                <Nav.Link
                  href="#"
                  active={activeTab === "employee"}
                  onClick={() => handleTabChange("employee")}
                >
                  Employee Login
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#"
                  active={activeTab === "admin"}
                  onClick={() => handleTabChange("admin")}
                >
                  Admin Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            {activeTab === "employee" ? (
              <EmployeeLoginForm />
            ) : (
              <AdminLoginForm />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
