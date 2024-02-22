import { Form, FormControl, Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_EMPLOYEE } from "../utils/queries";

export default function search({ employees, setEmployees }) {
  const [formState, setFormState] = useState("");
  const { loading, data } = useQuery(QUERY_EMPLOYEE, {
    variables: { username: formState },
  });
  const handleChange = (event) => {
    const { value } = event.target;
    setFormState(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchEmployee = data?.employee || {};
      console.log(searchEmployee);
      setEmployees(
        employees.filter(
          (employee) => employee.username == searchEmployee.username
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form inline onSubmit={handleFormSubmit}>
      <FormControl
        type="text"
        placeholder="Search Employee Username"
        className="mr-sm-2"
        value={formState}
        onChange={handleChange}
      />
      <Button variant="outline-warning" className="mt-3 mb-3" type="submit">
        Search
      </Button>
    </Form>
  );
}
