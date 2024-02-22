import { Button, Container, Row, Col, Table } from "react-bootstrap";
import Search from "../components/Search";
import AdminSignup from "../components/AddAdmin";
import EmployeeSignup from "../components/AddEmployee";
import RemoveEmployee from "../components/RemoveEmployee";
import RemoveVideo from "../components/RemoveVideo";
import AddVideo from "../components/AddVideo";
import { useState, useEffect } from "react";
import React from "react";
import { QUERY_EMPLOYEES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
const username = "Placeholder";

export default function admin() {
  // const [tableState, setTableState] = useState({});
  const [employees, setEmployees] = useState([]);

  const { loading, data } = useQuery(QUERY_EMPLOYEES);
  // const employees = data?.employees || [];
  useEffect(() => {
    if (data) {
      setEmployees(data.employees);
    }
  }, [loading, data]);
  console.log(employees);
  function employeeID(id) {
    return id.split("").slice(17);
  }

  if (Auth.loggedIn() == true) {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={3} className="d-flex flex-column">
              <h2>Welcome, {username}</h2>
              <Search employees={employees} setEmployees={setEmployees} />
              <Button
                variant="info"
                className="mb-3"
                onClick={() => setEmployees(data.employees)}
              >
                View All
              </Button>
              <AdminSignup />
              <EmployeeSignup
                employees={employees}
                setEmployees={setEmployees}
              />
              <RemoveEmployee
                employees={employees}
                setEmployees={setEmployees}
              />

              <AddVideo />
              <RemoveVideo />
            </Col>
            <Col xs={9}>
              <h3>Employees:</h3>
              {/* Main section to display employee details */}
              <Table striped>
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Username</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee._id}>
                      <td>{employeeID(employee._id)}</td>
                      <td>{employee.name}</td>
                      <td>{employee.username}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h3>Administrators:</h3>
              <Table striped>
                <thead>
                  <tr>
                    <th>Admin Email</th>
                    <th>Admin Name</th>
                    <th>Admin Username</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee._id}>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    window.location.replace("/login");
  }
}
