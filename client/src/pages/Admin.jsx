//IMPORTS
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import Search from "../components/Search";
import AdminSignup from "../components/AddAdmin";
import EmployeeSignup from "../components/AddEmployee";
import RemoveEmployee from "../components/RemoveEmployee";
import RemoveAdmin from "../components/RemoveAdmin";
import RemoveVideo from "../components/RemoveVideo";
import AddVideo from "../components/AddVideo";
import { useState, useEffect } from "react";
import React from "react";
import { QUERY_EMPLOYEES, QUERY_ADMINS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";

//
//export function
export default function admin() {
  //creating states for employee and admin tables
  const [employees, setEmployees] = useState([]);
  const [admins, setAdmins] = useState([]);

  //loading arrays with data
  const { loading, data } = useQuery(QUERY_EMPLOYEES);
  const adminQuery = useQuery(QUERY_ADMINS);
  const adminData = adminQuery.data?.admins || [];
  useEffect(() => {
    if (data) {
      setEmployees(data.employees);
    }
  }, [loading, data]);

  useEffect(() => {
    if (adminData) {
      setAdmins(adminData);
    }
  }, [adminQuery]);

  //function to generate employee id
  function employeeID(id) {
    return id.split("").slice(17);
  }
  const currentAdmin = Auth.getProfile();
  console.log(currentAdmin);
  const username = currentAdmin.data.username;

  //conditional rendering to check admin state
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
              <AdminSignup admins={admins} setAdmins={setAdmins} />
              <EmployeeSignup
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
                      <td>
                        <RemoveEmployee
                          employees={employees}
                          setEmployees={setEmployees}
                          employee={employee.username}
                        />
                      </td>
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
                  {admins.map((admin) => (
                    <tr key={admin._id}>
                      <td>{admin.email}</td>
                      <td>{admin.name}</td>
                      <td>{admin.username}</td>
                      <td>
                        <RemoveAdmin
                          admins={admins}
                          setAdmins={setAdmins}
                          admin={admin.email}
                        />
                      </td>
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
    window.location.replace("/");
  }
}
